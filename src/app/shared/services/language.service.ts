import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguageValue } from '../types/language-list.interface';
import { prefsActions } from '../store/preferences/preferences.actions';
import { selectAppLang } from '../store/preferences/preferences.reducers';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _store = inject(Store);
  private readonly _translateService = inject(TranslateService);

  public readonly appLanguage$ = this._store.select(selectAppLang);

  constructor() {
    this._store.select(selectAppLang).subscribe(lang => this._translateService.use(lang));
  }

  public setLanguage(lang: AppLanguageValue): void {
    this._store.dispatch(prefsActions.changeLanguage({ lang }));
  }
}
