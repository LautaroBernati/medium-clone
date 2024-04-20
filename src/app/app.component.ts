import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/store.actions';
import { NavigationEnd, Router } from '@angular/router';
import { RenderScheduler } from '@ngrx/component';
import { delay, filter, take } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { getLangList } from './shared/util/lang-list.function';
import { prefsActions } from './shared/store/preferences/preferences.actions';
import { selectAppSavePrefs } from './shared/store/preferences/preferences.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RenderScheduler],
})
export class AppComponent {
  private readonly _store = inject(Store);
  private readonly _router = inject(Router);
  private readonly _renderScheduler = inject(RenderScheduler);
  private readonly _translate = inject(TranslateService);
  private readonly _cdr = inject(ChangeDetectorRef);

  constructor() {
    const languages = getLangList().map(lang => lang.value);

    this._translate.addLangs(languages);

    this._translate.onLangChange.pipe(delay(350)).subscribe(() => {
      this._cdr.detectChanges();
    });

    this._store.dispatch(authActions.getcurrentuser());
    this._store.dispatch(prefsActions.getSavePreferences());

    this._store.select(selectAppSavePrefs).pipe(
      take(1),
    ).subscribe(value => {

      if (value) {
        this._store.dispatch(prefsActions.getLanguage());
        this._store.dispatch(prefsActions.getTheme());
      }
    });

    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe(() => this._renderScheduler.schedule());
  }
}
