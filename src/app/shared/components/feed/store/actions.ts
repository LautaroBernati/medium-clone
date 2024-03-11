/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, props } from '@ngrx/store';
import { IGetFeedResponse } from '../types/feed-response.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const feedActions = createActionGroup({
  source: 'Feed',
  events: {
    'Get feed': props<{ url: string }>(),
    'Get feed Success': props<{ feed: IGetFeedResponse }>(),
    'Get feed Failure': props<{ error: HttpErrorResponse }>(),
  }
});
