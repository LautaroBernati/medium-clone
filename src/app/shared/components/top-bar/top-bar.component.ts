import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { authActions } from '../../../auth/store/store.actions';

@Component({
  selector: 'mc-topbar',
  templateUrl: 'top-bar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class TopbarComponent {
  private readonly _store = inject(Store);
  private readonly _router = inject(Router);

  public readonly data$ = combineLatest({
    currentUser: this._store.select(selectCurrentUser),
  });

  public onLogout(): void {
    this._store.dispatch(authActions.logOut());
    this._router.navigate(['/login']);
  }
}
