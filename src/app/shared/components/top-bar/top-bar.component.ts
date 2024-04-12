import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter } from 'rxjs';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { authActions } from '../../../auth/store/store.actions';
import { LetModule, PushModule } from '@ngrx/component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { getLangList } from '../../util/lang-list.function';
import { AppLanguageValue } from '../../types/language-list.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mc-topbar',
  templateUrl: 'top-bar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, PushModule, LetModule, ReactiveFormsModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  private readonly _store = inject(Store);
  private readonly _translate = inject(TranslateService);

  public readonly langList = getLangList();
  public readonly langControl = new FormControl<AppLanguageValue>('en');
  public readonly data$ = combineLatest({
    currentUser: this._store.select(selectCurrentUser),
  });

  constructor() {
    this.langControl.valueChanges.pipe(
      filter((value): value is AppLanguageValue => !!value),
    ).subscribe((value) => this._translate.use(value));
  }

  // public onLogout(): void {
  //   this._store.dispatch(authActions.logOut());
  // }
}
