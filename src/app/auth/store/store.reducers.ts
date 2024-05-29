import { createFeature, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../types/auth-state.interface';
import { authActions } from './store.actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: IAuthState = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    on(authActions.register, (state): IAuthState => ({ ...state, isSubmitting: true, validationErrors: null })),
    on(authActions.registerSuccess, (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.registerFailure, (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),

    on(authActions.login, (state): IAuthState => ({ ...state, isSubmitting: true, validationErrors: null })),
    on(authActions.loginSuccess, (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFailure, (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),

    on(authActions.getCurrentUser, (state): IAuthState => ({ ...state, isLoading: true, validationErrors: null })),
    on(authActions.getCurrentUserSuccess, (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCurrentUserFailure, (state): IAuthState => ({
      ...state,
      isLoading: false,
      currentUser: null, // unauthorized
    })),

    on(authActions.logOut, (state): IAuthState => ({ ...state })),
    on(authActions.logOutSuccess, (state): IAuthState => ({ ...state, isLoading: false, currentUser: null })),
    on(authActions.logOutFailure, (): IAuthState => initialState),

    on(authActions.updateCurrentUser, (state): IAuthState => ({ ...state, isSubmitting: true })),
    on(authActions.updateCurrentUserSuccess, (state, { currentUser }): IAuthState => ({
      ...state,
      isSubmitting: false,
      currentUser,
    })),
    on(authActions.updateCurrentUserFailure, (state, { errors }): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: errors,
    })),

    on(routerNavigatedAction, (state): IAuthState => ({ ...state, validationErrors: null })),
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading: selectAuthIsLoading,
  selectCurrentUser,
  selectValidationErrors,
  selectAuthState: selectAuthData,
} = authFeature;
