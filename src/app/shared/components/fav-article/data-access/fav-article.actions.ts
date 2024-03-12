/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, props } from '@ngrx/store';
import { IBackendErrors } from '../../../../shared/types/backend-errors.interface';
import { Article } from '../../../../articles/data-access/services/articles.service';


export const favArticleActions = createActionGroup({
  source: 'fav article',
  events: {
    'Favorite Article': props<{ slug: string; isFavorited: boolean }>(),
    'Favorite Article Success': props<{ article: Article }>(),
    'Favorite Article Failure': props<{ errors: IBackendErrors }>(),
  },
});
