import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { ArticlesService } from '../../../../articles/data-access/services/articles.service';
import { favArticleActions } from './fav-article.actions';

export const favoriteArticleEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(favArticleActions.favoriteArticle),
      switchMap(({ slug, isFavorited }) => {
        const serviceCall = isFavorited ? articlesService.favoriteArticle(slug) : articlesService.unfavoriteArticle(slug);

        return serviceCall.pipe(
          map((article) => {
            return favArticleActions.favoriteArticleSuccess({ article });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(favArticleActions.favoriteArticleFailure({ errors: err.error.errors ?? [] }));
          }),
        );
      }),
    ),
  { functional: true },
);
