import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/store.actions';
import { NavigationEnd, Router } from '@angular/router';
import { RenderScheduler } from '@ngrx/component';
import { filter } from 'rxjs';

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

  constructor() {
    this._store.dispatch(authActions.getcurrentuser());

    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe(() => this._renderScheduler.schedule());
  }
}
