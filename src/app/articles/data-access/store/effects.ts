import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, of, map, catchError, tap } from 'rxjs';
import { ArticlesService } from '../services/articles.service';
import { articleActions } from './actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

export const getArticleEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(articleActions.getArticle),
      switchMap(({ slug }) => {
        return articlesService.getArticlesBySlug(slug).pipe(
          map((article) => {
            return articleActions.getArticleSuccess({ article });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(articleActions.getArticleFailure({ error }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const getArticleCommentsEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(articleActions.getArticleComments),
      switchMap(({ slug }) => {
        return articlesService.getCommentsBySlug(slug).pipe(
          map((comments) => {
            return articleActions.getArticleCommentsSuccess({ comments });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(articleActions.getArticleCommentsFailure({ errors: err.error.errors ?? [] }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const createArticleCommentEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(articleActions.createArticleComment),
      switchMap(({ articleSlug, data }) => {
        return articlesService.createArticleComment(articleSlug, data).pipe(
          map((comment) => {
            return articleActions.createArticleCommentSuccess({ articleSlug, comment });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(articleActions.createArticleCommentFailure({ errors: err.error.errors ?? [] }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const deleteArticleCommentEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(articleActions.deleteArticleComment),
      switchMap(({ articleSlug, commentId }) => {
        return articlesService.deleteArticleComment(articleSlug, commentId).pipe(
          map(() => {
            return articleActions.deleteArticleCommentSuccess({ articleSlug });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(articleActions.deleteArticleCommentFailure({ errors: err.error.errors ?? [] }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const reloadAfterCommentSuccessEffect = createEffect(
  (actions$ = inject(Actions), store = inject(Store)) =>
    actions$.pipe(
      ofType(
        articleActions.createArticleCommentSuccess,
        articleActions.deleteArticleCommentSuccess,
      ),
      tap((data) => store.dispatch(articleActions.getArticleComments({ slug: data.articleSlug }))),
    ),
  { functional: true, dispatch: false },
);

export const createArticleEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(articleActions.createArticle),
      switchMap(({ data }) => {
        return articlesService.createArticle(data).pipe(
          map((article) => {
            return articleActions.createArticleSuccess({ article });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(articleActions.createArticleFailure({ errors: err.error.errors ?? [] }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const redirectAfterSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(
        articleActions.createArticleSuccess,
        articleActions.editArticleSuccess,
      ),
      tap((data) => {
        router.navigate([`./articles/${data.article.slug}`]);
      }),
    ),
  { functional: true, dispatch: false },
);

export const editArticleEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(articleActions.editArticle),
      switchMap(({ data, slug }) => {
        return articlesService.editArticle({
          title: data.title,
          description: data.description,
          body: data.body,
        }, slug).pipe(
          map((article) => {
            return articleActions.editArticleSuccess({ article });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(articleActions.editArticleFailure({ errors: err.error.errors ?? [] }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const deleteArticleEffect = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) =>
    actions$.pipe(
      ofType(articleActions.deleteArticle),
      switchMap(({ slug }) => {
        return articlesService.deleteArticle(slug).pipe(
          map(() => articleActions.deleteArticleSuccess()),
          catchError((err: HttpErrorResponse) => {
            return of(articleActions.deleteArticleFailure({ errors: err.error.errors ?? [] }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const redirectAfterDeleteSuccess = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    actions$.pipe(
      ofType(articleActions.deleteArticleSuccess),
      tap(() => router.navigate(['/home'])),
    ),
  { functional: true, dispatch: false },
);
