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
    on(authActions.register, (state) => ({ ...state, isSubmitting: true, validationErrors: null })),
    on(authActions.registersuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.registerfailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),

    on(authActions.login, (state) => ({ ...state, isSubmitting: true, validationErrors: null })),
    on(authActions.loginsuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginfailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),

    on(authActions.getcurrentuser, (state) => ({ ...state, isLoading: true, validationErrors: null })),
    on(authActions.getcurrentusersuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getcurrentuserfailure, (state) => ({
      ...state,
      isLoading: false,
      currentUser: null, // unauthorized
    })),

    on(routerNavigatedAction, (state) => ({ ...state, validationErrors: null })),
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;
