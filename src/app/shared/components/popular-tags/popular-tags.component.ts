import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { popularTagsActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectError, selectIsLoading, selectpopularTagsData } from './store/reducers';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: 'popular-tags.component.html',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ErrorMessageComponent, RouterModule, PushModule, LetModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularTagsComponent implements OnInit {
  private readonly _store = inject(Store);
  public readonly data$ = combineLatest({
    popularTags: this._store.select(selectpopularTagsData),
    isLoading: this._store.select(selectIsLoading),
    error: this._store.select(selectError),
});

  public ngOnInit(): void {
    this._store.dispatch(popularTagsActions.getPopularTags());
  }
}
