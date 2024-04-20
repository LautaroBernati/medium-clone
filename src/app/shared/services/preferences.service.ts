import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguageValue } from '../types/language-list.interface';
import { prefsActions } from '../store/preferences/preferences.actions';
import { selectAppLang, selectAppSavePrefs, selectAppTheme } from '../store/preferences/preferences.reducers';
import { AppTheme } from '../types/themes.interface';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PreferencesService {
  private readonly _store = inject(Store);
  private readonly _translateService = inject(TranslateService);

  public readonly appLanguage$ = this._store.select(selectAppLang);
  public readonly appThemes$ = this._store.select(selectAppTheme);
  public readonly savePreferences$ = this._store.select(selectAppSavePrefs);

  constructor() {
    this._store.select(selectAppLang).subscribe((lang) => this._translateService.use(lang));

    this._store.select(selectAppTheme).subscribe((theme) => {
      document.body.setAttribute('data-bs-theme', theme);
    });
  }

  public setLanguage(lang: AppLanguageValue): void {
    this._store.dispatch(prefsActions.changeLanguage({ lang }));
  }

  public setTheme(theme: AppTheme): void {
    this._store.dispatch(prefsActions.changeTheme({ theme }));
  }

  public setSavePreferences(value: boolean): void {
    this._store.dispatch(prefsActions.savePreferences({ value }));
  }

  public savePreferences(): void {
    this._store
      .select(selectAppLang)
      .pipe(take(1))
      .subscribe((lang) => this._store.dispatch(prefsActions.changeLanguage({ lang })));

      this._store
      .select(selectAppTheme)
      .pipe(take(1))
      .subscribe((theme) => this._store.dispatch(prefsActions.changeTheme({ theme })));
  }
}
