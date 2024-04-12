import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/store.actions';
import { NavigationEnd, Router } from '@angular/router';
import { RenderScheduler } from '@ngrx/component';
import { delay, filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguageValue } from './shared/types/language-list.interface';
import { getLangList } from './shared/util/lang-list.function';

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
    const defLang: AppLanguageValue = 'en';
    const languages = getLangList().map(lang => lang.value);

    this._translate.setDefaultLang(defLang);
    this._translate.use(defLang);
    this._translate.addLangs(languages);

    this._translate.onLangChange.pipe(delay(300)).subscribe(() => {
      this._cdr.detectChanges();
    });

    this._store.dispatch(authActions.getcurrentuser());

    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe(() => this._renderScheduler.schedule());
  }
}
