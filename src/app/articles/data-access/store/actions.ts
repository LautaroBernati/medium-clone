/* eslint-disable @typescript-eslint/naming-convention */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Article, CreateArticleDTO, EditableArticle, Comment } from '../services/articles.service';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    'Get Article': props<{ slug: string }>(),
    'Get Article Success': props<{ article: Article }>(),
    'Get Article Failure': props<{ error: HttpErrorResponse }>(),

    'Get Article Comments': props<{ slug: string }>(),
    'Get Article Comments Success': props<{ comments: Comment[] }>(),
    'Get Article Comments Failure': props<{ errors: IBackendErrors }>(),

    'Create Article Comment': props<{ articleSlug: string; data: string }>(),
    'Create Article Comment Success': props<{ articleSlug: string; comment: Comment }>(),
    'Create Article Comment Failure': props<{ errors: IBackendErrors }>(),

    'Delete Article Comment': props<{ articleSlug: string; commentId: string }>(),
    'Delete Article Comment Success': props<{ articleSlug: string }>(),
    'Delete Article Comment Failure': props<{ errors: IBackendErrors }>(),

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
