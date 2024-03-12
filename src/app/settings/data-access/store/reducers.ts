import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { authActions } from '../../../auth/store/store.actions';

declare type SettingsState = {
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}

const initialState: SettingsState = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,

    on(authActions.updateCurrentUser, (state) => ({ ...state, isSubmitting: true })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
    })),
    on(authActions.updateCurrentUserFailure, (state, { errors }) => ({
      ...state,
      isSubmitting: false,
      validationErrors: errors,
    })),

    on(routerNavigatedAction, () => (initialState)),
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectIsSubmitting: selectSettingsIsSubmitting,
  selectValidationErrors: selectSettingsErrors,
} = settingsFeature;
