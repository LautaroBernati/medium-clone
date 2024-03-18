import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { Profile } from '../../../shared/services/profiles-main.service';
import { profileActions } from './profiles-store.actions';
import { HttpErrorResponse } from '@angular/common/http';

declare interface IProfileState {
  isLoading: boolean;
  isSubmitting: boolean;
  data: Profile | null;
  validationErrors: IBackendErrors | null;
  error: HttpErrorResponse | undefined;
}

const initialState: IProfileState = {
  isLoading: false,
  isSubmitting: false,
  data: null,
  validationErrors: null,
  error: undefined,
};

const profileFeature = createFeature({
  name: 'profile',
  reducer: createReducer(
    initialState,
    on(profileActions.getProfile, (state) => ({ ...state, isLoading: true, validationErrors: null })),
    on(profileActions.getProfileSuccess, (state, { profile }) => ({ ...state, isLoading: false, data: profile })),
    on(profileActions.getProfileFailure, (state, { error }) => ({ ...state, error, isLoading: false })),

    on(profileActions.followAuthor, (state) => ({ ...state, isLoading: true })),
    on(profileActions.followAuthorSuccess, (state) => ({
      ...state,
      data: state.data ? { ...state.data, isFollowing: true } : null,
    })),
    on(profileActions.followAuthorFailure, (state) => ({ ...state, isLoading: false })),

    on(routerNavigatedAction, () => initialState),
  ),
});

export const {
  name: profileFeatureKey,
  reducer: profileReducer,
  selectData: selectProfileData,
  selectIsLoading: selectProfileIsLoading,
  selectIsSubmitting: selectProfileIsSubmitting,
  selectValidationErrors: selectProfileValidationErrors,
} = profileFeature;
