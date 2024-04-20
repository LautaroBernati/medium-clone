import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { filter, map, take } from 'rxjs';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { CommonModule } from '@angular/common';
import { getLangList } from '../../util/lang-list.function';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppLanguageValue } from '../../types/language-list.interface';
import { authActions } from '../../../auth/store/store.actions';
import { AppTheme } from '../../types/themes.interface';
import { PreferencesService } from '../../services/preferences.service';
import { prefsActions } from '../../store/preferences/preferences.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterModule, LetModule, PushModule, ReactiveFormsModule]
})
export class SidebarComponent {
  private readonly _store = inject(Store);
  private readonly _preferencesService = inject(PreferencesService);

  public readonly langList = getLangList();
  public readonly langControl = new FormControl<AppLanguageValue>('en');
  public readonly savePreferencesControl = new FormControl<boolean>(false, { nonNullable: true });
  public readonly themesControl = new FormControl<AppTheme>('light');
  public readonly isAuthenticated$ = this._store.select(selectCurrentUser).pipe(
    map(user => Boolean(user)),
  );

  constructor() {
    this.langControl.valueChanges.pipe(
      filter((value): value is AppLanguageValue => !!value),
    ).subscribe((value) => this._preferencesService.setLanguage(value));

    this.themesControl.valueChanges.pipe(
      filter((value): value is AppTheme => !!value),
    ).subscribe(theme => {
      this._preferencesService.setTheme(theme);
    });

    this._preferencesService.appThemes$.pipe(
      take(1),
    ).subscribe(themeValue => this.themesControl.patchValue(themeValue, { emitEvent: false }));

    this._preferencesService.appLanguage$.pipe(
      take(1),
    ).subscribe(lang => this.langControl.patchValue(lang, { emitEvent: false }));

    this._preferencesService.savePreferences$.pipe(
      take(1),
    ).subscribe(value => this.savePreferencesControl.patchValue(value, { emitEvent: false }));

    this.savePreferencesControl.valueChanges.subscribe(
      (value) => {
        this._store.dispatch(prefsActions.savePreferences({ value }));

        if (value) {
          this._preferencesService.savePreferences();
        }
      }
    );
  }

  public handleLogout(): void {
    this._store.dispatch(authActions.logOut());
  }
}
