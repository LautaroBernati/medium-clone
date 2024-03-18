import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, of, map, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { profileActions } from './profiles-store.actions';
import { ProfilesService } from '../profiles.service';

export const getProfileEffect = createEffect(
  (actions$ = inject(Actions), profilesService = inject(ProfilesService)) =>
    actions$.pipe(
      ofType(profileActions.getProfile),
      switchMap(({ username }) => {
        return profilesService.getProfileByUsername(username).pipe(
          map((profile) => {
            return profileActions.getProfileSuccess({ profile });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(profileActions.getProfileFailure({ error }));
          }),
        );
      }),
    ),
  { functional: true },
);

export const followProfileEffect = createEffect(
  (actions$ = inject(Actions), profilesService = inject(ProfilesService)) =>
    actions$.pipe(
      ofType(profileActions.followAuthor),
      switchMap(({ username }) => {
        return profilesService.followUser(username).pipe(
          map((profile) => profileActions.followAuthorSuccess({ profile })),
          catchError((err: HttpErrorResponse) =>
            of(profileActions.followAuthorFailure({ errors: err.error.errors ?? [] })),
          ),
        );
      }),
    ),
  { functional: true },
);

export const unfollowProfileEffect = createEffect(
  (actions$ = inject(Actions), profilesService = inject(ProfilesService)) =>
    actions$.pipe(
      ofType(profileActions.unfollowAuthor),
      switchMap(({ username }) => {
        return profilesService.unfollowUser(username).pipe(
          map((profile) => profileActions.unfollowAuthorSuccess({ profile })),
          catchError((err: HttpErrorResponse) =>
            of(profileActions.unfollowAuthorFailure({ errors: err.error.errors ?? [] })),
          ),
        );
      }),
    ),
  { functional: true },
);
