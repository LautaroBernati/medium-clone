/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AppLanguageValue } from '../../types/language-list.interface';
import { AppTheme } from '../../types/themes.interface';

export const prefsActions = createActionGroup({
  source: 'preferences',
  events: {
    'Get Theme': emptyProps(),
    'Get Theme Success': props<{ theme: AppTheme }>(),
    'Get Theme Failure': emptyProps(),

    'Change Theme': props<{ theme: AppTheme }>(),
    'Change Theme Success': props<{ theme: AppTheme }>(),
    'Change Theme Failure': emptyProps(),

    'Get Language': emptyProps(),
    'Get Language Success': props<{ lang: AppLanguageValue }>(),
    'Get Language Failure': emptyProps(),

    'Change Language': props<{ lang: AppLanguageValue }>(),
    'Change Language Success': props<{ lang: AppLanguageValue }>(),
    'Change Language Failure': emptyProps(),
  },
});
