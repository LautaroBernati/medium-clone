import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, of, map, catchError } from 'rxjs';
import { FeedService } from '../services/feed.service';
import { feedActions } from './actions';
import { HttpErrorResponse } from '@angular/common/http';

export const getFeedEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) =>
    actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({ url }) => {
        return feedService.getFeed(url).pipe(
          map((feed) => {
            return feedActions.getFeedSuccess({ feed });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(feedActions.getFeedFailure(err));
          }),
        );
      }),
    ),
  { functional: true },
);
