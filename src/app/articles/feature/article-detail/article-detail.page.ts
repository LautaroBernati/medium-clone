import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, combineLatest, filter, map, of, shareReplay, switchMap, take, tap } from 'rxjs';
import { selectArticleData, selectArticleErrors, selectArticleIsLoading } from '../../data-access/store/reducers';
import { articleActions } from '../../data-access/store/actions';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { Article } from '../../data-access/services/articles.service';

@Component({
  selector: 'mc-article',
  templateUrl: 'article-detail.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailPage {
  private readonly _store = inject(Store);
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  private readonly _item$ = this._route.paramMap.pipe(
    map(params => {
      const item = params.get('slug');

      if (!item) {
        throw new TypeError('slug not found');
      }

      return item;
    }),
    catchError((item) => {
      this._router.navigate(['/home']);

      return of(item);
    }),
    filter((data): data is string => typeof data === 'string'),
    tap(slug => this._store.dispatch(articleActions.getArticle({ slug }))),
    switchMap(() => this._store.select(selectArticleData)),
    shareReplay({ bufferSize: 1, refCount: true }), // removes the need for duplicate gets. Never delete the refCount property.
  );

  public readonly data$ = combineLatest({
    article: this._item$,
    error: this._store.select(selectArticleErrors),
    isLoading: this._store.select(selectArticleIsLoading),
    currentUser: this._store.select(selectCurrentUser).pipe(
      filter((currentUser): currentUser is ICurrentUser | null => currentUser !== undefined),
    ),
  });

  public onEditArticle(): void {
    const slug = this._route.snapshot.paramMap.get('slug');

    if (slug) {
      this._router.navigate(['../edit'], { queryParams: { slug }, relativeTo: this._route });
    }
  }

  public onDeleteArticle(event: boolean): void {
    if (event === true) {
      this._item$.pipe(
        take(1),
        filter((data): data is Article => !!data),
        map(data => data.slug),
      ).subscribe(slug => {
        this._store.dispatch(articleActions.deleteArticle({ slug }));
      });
    }
  }

  public onFollowAuthor(username: string): void {
    this._store.dispatch(articleActions.followAuthor({ username }));
  }

  public onMarkAsFavorite(): void {
    combineLatest({
      slug: this._route.paramMap.pipe(
        map((params) => params.get('slug')?.toString() ?? null),
        filter((data): data is string => (!!data && typeof data === 'string')),
      ),
      article: this._store.select(selectArticleData).pipe(
        filter((data): data is Article => !!(data)),
      ),
    }).pipe(
      take(1),
    ).subscribe(data => {
      if (!data.article.favorited) {
        this._store.dispatch(articleActions.favoriteArticle({ slug: data.slug }));
      } else {
        this._store.dispatch(articleActions.unfavoriteArticle({ slug: data.slug }));
      }
    });
  }
}
