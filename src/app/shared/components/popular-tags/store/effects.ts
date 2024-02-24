import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, of, map, catchError } from 'rxjs';
import { popularTagsActions } from './actions';
import { PopularTagService } from '../services/popular-tag.service';

export const getPopularTagsEffect = createEffect(
  (actions$ = inject(Actions), popularTagService = inject(PopularTagService)) =>
    actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() => {
        return popularTagService.getPopularTags().pipe(
          map((tags) => {
            return popularTagsActions.getPopularTagsSuccess({ tags });
          }),
          catchError(() => {
            return of(popularTagsActions.getPopularTagsFailure());
          }),
        );
      }),
    ),
  { functional: true },
);
