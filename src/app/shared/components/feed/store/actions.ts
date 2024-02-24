/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IGetFeedResponse } from '../types/feed-response.interface';

export const feedActions = createActionGroup({
  source: 'Feed',
  events: {
    'Get feed': props<{ url: string }>(),
    'Get feed Success': props<{ feed: IGetFeedResponse }>(),
    'Get feed Failure': emptyProps(),
  }
});
