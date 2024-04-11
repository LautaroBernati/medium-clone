import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/store.reducers';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: 'feed-toggler.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, PushModule, TranslateModule, LetModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedTogglerComponent {
  @Input() public tagName? = '';

  private readonly _store = inject(Store);
  public readonly currentUser$ = this._store.select(selectCurrentUser);
}
