import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly _store = inject(Store);

  constructor() {
    this._store.dispatch(authActions.getcurrentuser());
  }
}
