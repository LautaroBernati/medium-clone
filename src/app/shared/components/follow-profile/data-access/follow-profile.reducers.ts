import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { profileActions } from '../../../../profiles/data-access/store/profiles-store.actions';
import { IBackendErrors } from '../../../types/backend-errors.interface';

export declare type PartialProfile = {
  username: string;
  isFollowing: boolean;
};

declare type FollowProfileState = {
  isLoading: boolean;
  validationErrors: IBackendErrors | null;
  profile: null | PartialProfile;
};

const initialState: FollowProfileState = {
  isLoading: false,
  validationErrors: null,
  profile: null,
};

const followProfileFeature = createFeature({
  name: 'follow-profile',
  reducer: createReducer(
    initialState,

    on(profileActions.getProfile, (state) => ({ ...state, isLoading: true, profile: null, validationErrors: null })),
    on(profileActions.getProfileSuccess, (state, { profile }) => ({
      ...state,
      isLoading: false,
      profile: {
        isFollowing: profile.following,
        username: profile.username,
      },
    })),
    on(profileActions.getProfileFailure, (state) => ({
      ...state,
      isLoading: false,
    })),

    on(profileActions.followAuthor, (state) => ({ ...state, isLoading: true, validationErrors: null })),
    on(profileActions.followAuthorSuccess, (state, { profile }) => ({
      ...state,
      isLoading: false,
      profile: {
        isFollowing: profile.following,
        username: profile.username,
      },
    })),
    on(profileActions.followAuthorFailure, (state, { errors }) => ({
      ...state,
      isLoading: false,
      validationErrors: errors,
    })),

    on(profileActions.unfollowAuthor, (state) => ({ ...state, isLoading: true, validationErrors: null })),
    on(profileActions.unfollowAuthorSuccess, (state, { profile }) => ({
      ...state,
      isLoading: false,
      profile: {
        isFollowing: profile.following,
        username: profile.username,
      },
    })),
    on(profileActions.unfollowAuthorFailure, (state, { errors }) => ({
      ...state,
      isLoading: false,
      validationErrors: errors,
    })),

    on(routerNavigatedAction, () => initialState),
  ),
});

export const {
  name: followProfileFeatureKey,
  reducer: followProfileReducer,
  selectProfile: selectFollowProfileData,
  selectValidationErrors: selectFollowProfileErrors,
  selectIsLoading: selectFollowProfileIsLoading,
} = followProfileFeature;
