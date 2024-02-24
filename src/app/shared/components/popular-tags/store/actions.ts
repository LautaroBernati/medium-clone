/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const popularTagsActions = createActionGroup({
  source: 'popular tags',
  events: {
    'Get popular tags': emptyProps(),
    'Get popular tags Success': props<{ tags: string[] }>(),
    'Get popular tags Failure': emptyProps(),
  }
});
