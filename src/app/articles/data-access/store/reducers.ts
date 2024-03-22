import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Article, Comment } from '../services/articles.service';
import { articleActions } from './actions';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

declare interface IArticleState {
  isLoading: boolean;
  isSubmitting: boolean;
  data: Article | null;
  comments: Comment[] | null;
  errors: IBackendErrors | null;
}

const initialState: IArticleState = {
  isLoading: false,
  isSubmitting: false,
  data: null,
  comments: null,
  errors: null,
};

const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state) => ({ ...state, isLoading: true, errors: null })),
    on(articleActions.getArticleSuccess, (state, { article }) => ({ ...state, isLoading: false, data: article })),
    on(articleActions.getArticleFailure, (state, { error }) => ({ ...state, isLoading: false, error })),

    on(articleActions.createArticle, (state) => ({ ...state, isSubmitting: true, data: null, errors: null })),
    on(articleActions.createArticleSuccess, (state, { article }) => ({ ...state, isSubmitting: false, data: article })),
    on(articleActions.createArticleFailure, (state, { errors }) => ({ ...state, isSubmitting: false, errors })),

    on(articleActions.getArticleComments, (state) => ({ ...state, isLoading: true, comments: null })),
    on(articleActions.getArticleCommentsSuccess, (state, { comments }) => ({
      ...state,
      isLoading: false,
      comments,
    })),
    on(articleActions.getArticleCommentsFailure, (state, { errors }) => ({
      ...state,
      isLoading: false,
      errors,
    })),

    on(articleActions.createArticleComment, (state) => ({ ...state, isSubmitting: true })),
    on(articleActions.createArticleCommentSuccess, (state) => ({ ...state, isSubmitting: false })),
    on(articleActions.createArticleCommentFailure, (state, { errors }) => ({ ...state, isSubmitting: false, errors })),

    on(articleActions.deleteArticleComment, (state) => ({ ...state, isLoading: true })),
    on(articleActions.deleteArticleCommentSuccess, (state) => ({ ...state, isLoading: false })),
    on(articleActions.deleteArticleCommentFailure, (state, { errors }) => ({ ...state, isLoading: false, errors })),

    on(articleActions.editArticle, (state) => ({ ...state, isSubmitting: true, data: null, errors: null })),
    on(articleActions.editArticleSuccess, (state, { article }) => ({ ...state, isSubmitting: false, data: article })),
    on(articleActions.editArticleFailure, (state, { errors }) => ({ ...state, isSubmitting: false, errors })),

    on(articleActions.deleteArticle, (state) => ({ ...state, isLoading: true })),
    on(articleActions.deleteArticleSuccess, () => initialState),
    on(articleActions.deleteArticleFailure, (state) => ({ ...state, isLoading: false })),

    on(routerNavigatedAction, () => initialState),
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
