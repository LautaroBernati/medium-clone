import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mc-topbar',
  templateUrl: 'top-bar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class TopbarComponent {
  private readonly _store = inject(Store);
  public readonly data$ = combineLatest({
    currentUser: this._store.select(selectCurrentUser),
  });
}
