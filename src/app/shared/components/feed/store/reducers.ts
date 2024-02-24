import { createFeature, createReducer, on } from '@ngrx/store';
import { IFeedState } from '../types/feed-state.interface';
import { feedActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

const feedFeature = createFeature({
  name: 'Feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getFeed, (state) => ({ ...state, isLoading: true })),
    on(feedActions.getFeedSuccess, (state, { feed }) => ({ ...state, isLoading: false, data: feed })),
    on(feedActions.getFeedFailure, (state) => ({ ...state, isLoading: false })),

    on(routerNavigatedAction, () => initialState),
  ),
});

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  selectError,
  selectData: selectFeedData,
} = feedFeature;
