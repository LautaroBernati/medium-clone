import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { authActions } from './store.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from '../../shared/services/persistance.service';
import { Router } from '@angular/router';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService), persistanceService = inject(PersistanceService)) =>
    { return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.registerUser(request).pipe(
          map((currentUser) => {
            persistanceService.set('accessToken', currentUser.token);

            return authActions.registersuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(authActions.registerfailure({ errors: err.error.errors }));
          }),
        );
      }),
    ); },
  { functional: true },
);

export const redirectAfterRegistrationEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registersuccess),
      tap(() => router.navigate(['/home'])),
    );
  },
  { functional: true, dispatch: false }
);

export const loginEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService), persistanceService = inject(PersistanceService)) =>
    { return actions$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser) => {
            persistanceService.set('accessToken', currentUser.token);

            return authActions.loginsuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(authActions.loginfailure({ errors: err.error.errors }));
          }),
        );
      }),
    ); },
  { functional: true },
);

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginsuccess),
      tap(() => router.navigate(['/home'])),
    );
  },
  { functional: true, dispatch: false }
);

export const getCurrentUserEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService), persistanceService = inject(PersistanceService)) =>
    { return actions$.pipe(
      ofType(authActions.getcurrentuser),
      switchMap(() => {
        const token = persistanceService.get('accessToken');

        if (!token) {
          return of(authActions.getcurrentuserfailure());
        }

        return authService.getCurrentUser().pipe(
          map((currentUser) => {
            return authActions.getcurrentusersuccess({ currentUser });
          }),
          catchError(() => {
            return of(authActions.logOut());
          }),
        );
      }),
    ); },
  { functional: true },
);

export const logOutEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) =>
    { return actions$.pipe(
      ofType(authActions.logOut),
      tap(() => persistanceService.deleteData()),
      map(() => {
        return authActions.logOutSuccess();
      }),
      catchError(() => of(authActions.logOutFailure())),
    ); },
  { functional: true },
);

export const redirectAfterLogoutEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) =>
    { return actions$.pipe(
      ofType(authActions.logOutSuccess),
      tap(() => router.navigate(['/home'])),
    ); },
  { functional: true, dispatch: false },
);

export const updateCurrentUserEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) =>
    { return actions$.pipe(
      ofType(authActions.updateCurrentUser),
      switchMap(({ currentUserReq }) => authService.updateCurrentUser(currentUserReq).pipe(
        map(data => authActions.updateCurrentUserSuccess({ currentUser: data })),
        catchError((err: HttpErrorResponse) => of(authActions.updateCurrentUserFailure({ errors: err.error.errors }))),
      )),
    ); },
  { functional: true },
);
