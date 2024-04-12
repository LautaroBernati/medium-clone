import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppTheme } from '../types/themes.interface';

@Injectable({ providedIn: 'root' })
export class ThemesService {
  private readonly _themeEmitter$ = new BehaviorSubject<AppTheme>('light');

  public readonly appThemes$ = this._themeEmitter$.asObservable();

  constructor() {
    this._themeEmitter$.subscribe(theme => {
      document.body.setAttribute('data-bs-theme', theme);
    });
  }

  public setTheme(theme: AppTheme): void {
    this._themeEmitter$.next(theme);
  }
}
