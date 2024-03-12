import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter } from 'rxjs';
import { selectSettingsErrors, selectSettingsIsSubmitting } from '../data-access/store/reducers';
import { selectCurrentUser } from '../../auth/store/store.reducers';
import { authActions } from '../../auth/store/store.actions';
import { ProfileSettings } from '../../auth/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {
  private readonly _store = inject(Store);

  public readonly data$ = combineLatest({
    error: this._store.select(selectSettingsErrors),
    isSubmitting: this._store.select(selectSettingsIsSubmitting),
    currentUser: this._store.select(selectCurrentUser).pipe(
      filter(Boolean),
    ),
  });

  public onSaveSettings(event: ProfileSettings): void {
    this._store.dispatch(authActions.updateCurrentUser({ currentUserReq: event }));
  }

  public onLogout(): void {
    this._store.dispatch(authActions.logOut());
  }
}
