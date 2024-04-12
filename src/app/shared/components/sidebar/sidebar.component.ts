import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter, map, take } from 'rxjs';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { CommonModule } from '@angular/common';
import { getLangList } from '../../util/lang-list.function';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppLanguageValue } from '../../types/language-list.interface';
import { authActions } from '../../../auth/store/store.actions';
import { AppTheme } from '../../types/themes.interface';
import { ThemesService } from '../../services/themes.service';

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
  private readonly _translate = inject(TranslateService);
  private readonly _themesService = inject(ThemesService);

  public readonly langList = getLangList();
  public readonly langControl = new FormControl<AppLanguageValue>('en');
  public readonly themesControl = new FormControl<AppTheme>('light');
  public readonly isAuthenticated$ = this._store.select(selectCurrentUser).pipe(
    map(user => Boolean(user)),
  );

  constructor() {
    this.langControl.valueChanges.pipe(
      filter((value): value is AppLanguageValue => !!value),
    ).subscribe((value) => this._translate.use(value));

    this.themesControl.valueChanges.pipe(
      filter((value): value is AppTheme => !!value),
    ).subscribe(theme => {
      this._themesService.setTheme(theme);
    });

    this._themesService.appThemes$.pipe(
      take(1),
    ).subscribe(themeValue => this.themesControl.patchValue(themeValue, { emitEvent: false }));
  }

  public handleLogout(): void {
    this._store.dispatch(authActions.logOut());
  }
}
