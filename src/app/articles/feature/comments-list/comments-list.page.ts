import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, combineLatest, filter, map, switchMap, take, takeUntil, tap } from 'rxjs';
import { selectArticleComments, selectArticleData, selectArticleIsLoading, selectArticleIsSubmitting } from '../../data-access/store/reducers';
import { articleActions } from '../../data-access/store/actions';
import { Article, Comment } from '../../data-access/services/articles.service';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { ICurrentUser } from '../../../shared/types/current-user.interface';

@Component({
  selector: 'art-comments-list',
  templateUrl: 'comments-list.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsListPage implements OnDestroy {
  private readonly _store = inject(Store);
  public showNewCommentDialog = false;
  private readonly _destroyEmitter$ = new Subject<boolean>();

  public readonly data$ = combineLatest({
    comments: this._store.select(selectArticleData).pipe(
      filter((article): article is Article => Boolean(article)),
      map((article: Article) => (article.slug)),
      tap((slug: string) => this._store.dispatch(articleActions.getArticleComments({ slug }))),
      switchMap(() => this._store.select(selectArticleComments)),
      filter((comments): comments is Comment[] => (Boolean(comments) && Array.isArray(comments))),
    ),
    isLoading: this._store.select(selectArticleIsLoading),
    isSubmitting: this._store.select(selectArticleIsSubmitting),
    currentUser: this._store.select(selectCurrentUser).pipe(
      filter((currentUser): currentUser is ICurrentUser | null => currentUser !== undefined),
    ),
  });

  constructor() {
    this._store.select(selectArticleComments).pipe(
      takeUntil(this._destroyEmitter$),
      filter(data => Boolean(data)),
    ).subscribe(() => this.showNewCommentDialog = false);
  }

  public ngOnDestroy(): void {
    this._destroyEmitter$.next(true);
    this._destroyEmitter$.complete();
  }

  public onCreateComment(commentBody: string): void {
    this._store.select(selectArticleData).pipe(
      take(1),
      filter((article): article is Article => Boolean(article)),
      map(data => data.slug),
    ).subscribe(slug => {
      this._store.dispatch(articleActions.createArticleComment({
        articleSlug: slug,
        data: commentBody,
      }));
    });
  }

  public onDeleteComment(id: string): void {
    this._store.select(selectArticleData).pipe(
      take(1),
      tap(data => console.log(data)),
      filter((article): article is Article => Boolean(article)),
      map(data => data.slug),
    ).subscribe(articleSlug => {
      this._store.dispatch(articleActions.deleteArticleComment({ articleSlug, commentId: id }));
    });
  }
}
