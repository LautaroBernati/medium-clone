import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Article } from '../services/articles.service';
import { articleActions } from './actions';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

declare interface IArticleState {
  isLoading: boolean;
  isSubmitting: boolean;
  data: Article | null;
  errors: IBackendErrors | null;
}

const initialState: IArticleState = {
  isLoading: false,
  isSubmitting: false,
  data: null,
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

    on(articleActions.favoriteArticle, (state) => ({ ...state, isLoading: true })),
    on(articleActions.favoriteArticleSuccess, (state, { article }) => ({ ...state, isLoading: false, data: article })),
    on(articleActions.favoriteArticleFailure, (state, { errors }) => ({ ...state, isLoading: false, errors })),

    on(articleActions.editArticle, (state) => ({ ...state, isSubmitting: true, data: null, errors: null })),
    on(articleActions.editArticleSuccess, (state, { article }) => ({ ...state, isSubmitting: false, data: article })),
    on(articleActions.editArticleFailure, (state, { errors }) => ({ ...state, isSubmitting: false, errors })),

    on(articleActions.deleteArticle, (state) => ({ ...state, isLoading: true })),
    on(articleActions.deleteArticleSuccess, () => initialState),
    on(articleActions.deleteArticleFailure, (state) => ({ ...state, isLoading: false })),

    on(articleActions.unfavoriteArticle, (state) => ({ ...state, isLoading: true })),
    on(articleActions.unfavoriteArticleSuccess, (state, { article }) => ({
      ...state,
      isLoading: false,
      data: article,
    })),
    on(articleActions.unfavoriteArticleFailure, (state, { errors }) => ({ ...state, isLoading: false, errors })),

    on(articleActions.followAuthor, (state) => ({ ...state, isLoading: true })),
    on(articleActions.followAuthorSuccess, (state) => ({
      ...state,
      data: state.data ? { ...state.data, isFollowing: true } : null,
    })),
    on(articleActions.followAuthorFailure, (state) => ({ ...state, isLoading: false })),

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
} = articleFeature;
