import { createFeature, createReducer, on } from '@ngrx/store';
import { AppLanguageValue } from '../../types/language-list.interface';
import { AppTheme } from '../../types/themes.interface';
import { prefsActions } from './preferences.actions';

type PreferencesState = {
  savePreferences: boolean;
  lang: AppLanguageValue;
  theme: AppTheme;
}

const initialState: PreferencesState = {
  savePreferences: false,
  lang: 'en',
  theme: 'light',
};

const preferencesFeature = createFeature({
  name: 'preferences',
  reducer: createReducer(
    initialState,

    on(prefsActions.savePreferences, (state, { value }): PreferencesState => ({
      ...state,
      savePreferences: value,
    })),

    on(prefsActions.getSavePreferencesSuccess, (state, { value }): PreferencesState => ({
      ...state,
      savePreferences: value,
    })),
    on(prefsActions.getSavePreferencesFailure, (state, { value }): PreferencesState => ({
      ...state,
      savePreferences: value,
    })),

    // on(prefsActions.changeLanguage, (state): PreferencesState => ({ ...state,  })),
    on(prefsActions.changeLanguageSuccess, (state, { lang }): PreferencesState => ({
      ...state,
      lang,
    })),
    on(prefsActions.changeLanguageFailure, (state): PreferencesState => ({
      ...state,
      lang: 'en',
    })),

    on(prefsActions.changeThemeSuccess, (state, { theme }): PreferencesState => ({
      ...state,
      theme,
    })),
    on(prefsActions.changeLanguageFailure, (state): PreferencesState => ({
      ...state,
      theme: 'light',
    })),

    on(prefsActions.getThemeSuccess, (state, { theme }): PreferencesState => ({
      ...state,
      theme,
    })),

    on(prefsActions.getLanguageSuccess, (state, { lang }): PreferencesState => ({
      ...state,
      lang,
    })),
  ),
});

export const {
  name: preferencesFeatureKey,
  reducer: preferencesReducer,
  selectLang: selectAppLang,
  selectSavePreferences: selectAppSavePrefs,
  selectTheme: selectAppTheme,
} = preferencesFeature;
