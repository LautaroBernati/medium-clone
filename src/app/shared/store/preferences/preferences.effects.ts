import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersistanceService } from '../../services/persistance.service';
import { prefsActions } from './preferences.actions';
import { catchError, map, of } from 'rxjs';
import { AppTheme } from '../../types/themes.interface';


export const changeLanguageEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(prefsActions.changeLanguage),
      map(({ lang }) => {
        persistanceService.set('pref_lang', lang);

        return prefsActions.changeLanguageSuccess({ lang });
      }),
      catchError(() => of(prefsActions.changeLanguageFailure())),
    );
  },
  { functional: true },
);

export const changeThemeEffect = createEffect(
  (actions$ = inject(Actions), persistanceService = inject(PersistanceService)) => {
    return actions$.pipe(
      ofType(prefsActions.changeTheme),
      map(({ theme }) => {
        persistanceService.set('pref_theme', theme);

        return prefsActions.changeThemeSuccess({ theme });
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
