import { Injectable, inject } from '@angular/core';
import { AppTheme } from '../types/themes.interface';
import { Store } from '@ngrx/store';
import { prefsActions } from '../store/preferences/preferences.actions';
import { selectAppTheme } from '../store/preferences/preferences.reducers';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  private readonly _store = inject(Store);

  public readonly appThemes$ = this._store.select(selectAppTheme);

  constructor() {
    this._store.select(selectAppTheme).subscribe(theme => {
      document.body.setAttribute('data-bs-theme', theme);
    });
  }

  public setTheme(theme: AppTheme): void {
    this._store.dispatch(prefsActions.changeTheme({ theme }));
  }
}
