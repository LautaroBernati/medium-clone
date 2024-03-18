/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Article, CreateArticleDTO, EditableArticle } from '../services/articles.service';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    'Get Article': props<{ slug: string }>(),
    'Get Article Success': props<{ article: Article }>(),
    'Get Article Failure': props<{ error: HttpErrorResponse }>(),

    'Create Article': props<{ data: CreateArticleDTO }>(),
    'Create Article Success': props<{ article: Article }>(),
    'Create Article Failure': props<{ errors: IBackendErrors }>(),

    'Edit Article': props<{ data: EditableArticle, slug: string }>(),
    'Edit Article Success': props<{ article: Article }>(),
    'Edit Article Failure': props<{ errors: IBackendErrors }>(),

    'Delete Article': props<{ slug: string }>(),
    'Delete Article Success': emptyProps(),
    'Delete Article Failure': props<{ errors: IBackendErrors }>(),
  },
});
