import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { PersistanceService } from '../../services/persistance.service';
import { prefsActions } from './preferences.actions';
import { catchError, map, of, tap } from 'rxjs';
import { AppTheme } from '../../types/themes.interface';
import { Store } from '@ngrx/store';
import { selectAppSavePrefs } from './preferences.reducers';


export const getSavePrefsEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(prefsActions.getSavePreferences),
      map(() => {
        const state = Boolean(persistanceService.get('pref_save')) ?? false;

        return prefsActions.getSavePreferencesSuccess({ value: state });
      }),
      catchError(() => of(prefsActions.getSavePreferencesFailure({ value: false }))),
    );
  },
  { functional: true },
);

export const savePreferencesEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(prefsActions.savePreferences),
      tap(({ value }) => {
        if (value) {
          persistanceService.set('pref_save', value);
        } else {
          persistanceService.deletePreferences();
        }
      }),
    );
  },
  { functional: true, dispatch: false },
);

export const changeLanguageEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(prefsActions.changeLanguage),
      concatLatestFrom(({ lang }) => {
        return [of(lang), store.select(selectAppSavePrefs)];
      }),
      map((data) => {
        if (data[2]) {
          persistanceService.set('pref_lang', data[1]);
        }

        return prefsActions.changeLanguageSuccess({ lang: data[1] });
      }),
      catchError(() => of(prefsActions.changeLanguageFailure())),
    );
  },
  { functional: true },
);

export const changeThemeEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService), store = inject(Store)) => {
    return actions$.pipe(
      ofType(prefsActions.changeTheme),
      concatLatestFrom(({ theme }) => {
        return [of(theme), store.select(selectAppSavePrefs)];
      }),
      map((data) => {
        if (data[2]) {
          persistanceService.set('pref_theme', data[1]);
        }

        return prefsActions.changeThemeSuccess({ theme: data[1] });
      }),
      catchError(() => of(prefsActions.changeThemeFailure())),
    );
  },
  { functional: true },
);

export const getThemeEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(prefsActions.getTheme),
      map(() => {
        const theme = persistanceService.get('pref_theme');

        if (!theme || typeof(theme) !== 'string') {
          throw new TypeError('Theme not found');
        }

        return prefsActions.getThemeSuccess(<{ theme: AppTheme }>{ theme });
      }),
      catchError(() => of(prefsActions.getThemeFailure())),
    );
  },
  { functional: true },
);

export const getLangEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(prefsActions.getLanguage),
      map(() => {
        const lang = persistanceService.get('pref_lang');

        if (!lang || typeof(lang) !== 'string' || !(lang === 'es' || lang === 'en')) {
          throw new TypeError('Theme not found');
        }

        return prefsActions.getLanguageSuccess({ lang });
      }),
      catchError(() => of(prefsActions.getLanguageFailure())),
    );
  },
  { functional: true },
);
