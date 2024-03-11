import { inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { articleActions } from '../../articles/data-access/store/actions';
import { feedActions } from '../components/feed/store/actions';

export const httpErrorsEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(
        articleActions.getArticleFailure,
        feedActions.getFeedFailure,
      ),
      tap((action) => {
        switch (action.error.status) {
          case 404:
            router.navigate(['/error/404']);
            break;
          case 403:
            router.navigate(['/error/403']);
            break;
          case 401:
            router.navigate(['/error/401']);
            break;
          default:
            router.navigate(['/error/500']);
            break;
        }
      }),
    );
  },
  {
    functional: true,
    dispatch: false,
  },
);
