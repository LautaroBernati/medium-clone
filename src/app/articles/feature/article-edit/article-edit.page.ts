import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Article, EditableArticle } from '../../data-access/services/articles.service';
import { Store } from '@ngrx/store';
import { articleActions } from '../../data-access/store/actions';
import { selectArticleData, selectArticleErrors, selectArticleIsLoading, selectArticleIsSubmitting } from '../../data-access/store/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, combineLatest, filter, map, of, shareReplay, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'art-edit',
  templateUrl: 'article-edit.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleEditPage {
  private readonly _store = inject(Store);
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _item$ = this._route.queryParamMap.pipe(
    map(queryParams => {
      const item = queryParams.get('slug');

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
    isSubmitting: this._store.select(selectArticleIsSubmitting),
  });

  public onEdit(edit: EditableArticle): void {
    this.data$.pipe(
      take(1),
      map(data => data.article),
      filter((data): data is Article => !!data),
      map(data => data.slug),
    ).subscribe(slug => {
      this._store.dispatch(articleActions.editArticle({ slug, data: edit }));
    });
  }
}
