import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Article, Comment } from '../services/articles.service';
import { articleActions } from './actions';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { HttpErrorResponse } from '@angular/common/http';

declare interface IArticleState {
  isLoading: boolean;
  isSubmitting: boolean;
  data: Article | null;
  comments: Comment[] | null;
  errors: IBackendErrors | null;
  httpError: HttpErrorResponse | null;
}

const initialState: IArticleState = {
  isLoading: false,
  isSubmitting: false,
  data: null,
  comments: null,
  errors: null,
  httpError: null,
};

const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state): IArticleState => ({ ...state, isLoading: true, errors: null })),
    on(
      articleActions.getArticleSuccess,
      (state, { article }): IArticleState => ({ ...state, isLoading: false, data: article }),
    ),
    on(
      articleActions.getArticleFailure,
      (state, { error }): IArticleState => ({ ...state, isLoading: false, httpError: error }),
    ),

    on(
      articleActions.createArticle,
      (state): IArticleState => ({ ...state, isSubmitting: true, data: null, errors: null }),
    ),
    on(
      articleActions.createArticleSuccess,
      (state, { article }): IArticleState => ({ ...state, isSubmitting: false, data: article }),
    ),
    on(
      articleActions.createArticleFailure,
      (state, { errors }): IArticleState => ({ ...state, isSubmitting: false, errors }),
    ),

    on(articleActions.getArticleComments, (state): IArticleState => ({ ...state, isLoading: true, comments: null })),
    on(
      articleActions.getArticleCommentsSuccess,
      (state, { comments }): IArticleState => ({
        ...state,
        isLoading: false,
        comments,
      }),
    ),
    on(
      articleActions.getArticleCommentsFailure,
      (state, { errors }): IArticleState => ({
        ...state,
        isLoading: false,
        errors,
      }),
    ),

    on(articleActions.createArticleComment, (state): IArticleState => ({ ...state, isSubmitting: true })),
    on(articleActions.createArticleCommentSuccess, (state): IArticleState => ({ ...state, isSubmitting: false })),
    on(
      articleActions.createArticleCommentFailure,
      (state, { errors }): IArticleState => ({ ...state, isSubmitting: false, errors }),
    ),

    on(articleActions.deleteArticleComment, (state): IArticleState => ({ ...state, isLoading: true })),
    on(articleActions.deleteArticleCommentSuccess, (state): IArticleState => ({ ...state, isLoading: false })),
    on(
      articleActions.deleteArticleCommentFailure,
      (state, { errors }): IArticleState => ({ ...state, isLoading: false, errors }),
    ),

    on(
      articleActions.editArticle,
      (state): IArticleState => ({ ...state, isSubmitting: true, data: null, errors: null }),
    ),
    on(
      articleActions.editArticleSuccess,
      (state, { article }): IArticleState => ({ ...state, isSubmitting: false, data: article }),
    ),
    on(
      articleActions.editArticleFailure,
      (state, { errors }): IArticleState => ({ ...state, isSubmitting: false, errors }),
    ),

    on(articleActions.deleteArticle, (state): IArticleState => ({ ...state, isLoading: true })),
    on(articleActions.deleteArticleSuccess, (): IArticleState => initialState),
    on(articleActions.deleteArticleFailure, (state): IArticleState => ({ ...state, isLoading: false })),

    on(routerNavigatedAction, (): IArticleState => initialState),
  ),
});

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectData: selectArticleData,
  selectIsLoading: selectArticleIsLoading,
  selectIsSubmitting: selectArticleIsSubmitting,
  selectErrors: selectArticleErrors,
  selectComments: selectArticleComments,
} = articleFeature;
