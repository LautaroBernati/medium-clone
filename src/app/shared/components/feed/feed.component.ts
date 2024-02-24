import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { Observable, combineLatest, delay } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducers';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingComponent } from '../loading/loading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { environment } from 'src/environments/environment';
import queryString from 'query-string';
import { TagListComponent } from '../tag-list/tag-list.component';
import { IGetFeedResponse } from './types/feed-response.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: 'feed.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ErrorMessageComponent, LoadingComponent, PaginationComponent, TagListComponent],
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('apiUrl') public apiUrl: string = '';
  private readonly _store = inject(Store);
  private readonly _router = inject(Router);
  private readonly _route = inject(ActivatedRoute);

  public data$: Observable<{
    isLoading: boolean;
    error: string | null;
    feed: IGetFeedResponse | null;
  }> | null = null;
  public readonly limit = environment.limit;
  public readonly baseUrl = this._router.url.split('?')[0];
  public currentPage: number = 0;

  public ngOnInit(): void {
    this.data$ = combineLatest({
      isLoading: this._store.select(selectIsLoading),
      error: this._store.select(selectError),
      feed: this._store.select(selectFeedData),
    });

    this._route.queryParams.pipe(delay(200)).subscribe((params) => {
      this.currentPage = Number(params['page'] || '1');
      this._dispatchAction();
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes['apiUrl'].firstChange && changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue;

    if (isApiUrlChanged) {
      this._dispatchAction();
    }
  }

  private _dispatchAction(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrl);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this._store.dispatch(feedActions.getFeed({ url: apiUrlWithParams }));
  }
}
