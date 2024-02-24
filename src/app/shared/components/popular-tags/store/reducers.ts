import { createFeature, createReducer, on } from '@ngrx/store';
import { popularTagsActions } from './actions';

interface IPopularTagsState {
  isLoading: boolean;
  error: string | null;
  data: string[] | null;
};

const initialState: IPopularTagsState = {
  isLoading: false,
  error: null,
  data: null,
};

const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(popularTagsActions.getPopularTags, (state) => ({ ...state, isLoading: true })),
    on(popularTagsActions.getPopularTagsSuccess, (state, { tags }) => ({ ...state, isLoading: false, data: tags })),
    on(popularTagsActions.getPopularTagsFailure, (state) => ({ ...state, isLoading: false })),
  ),
});

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectData: selectpopularTagsData,
} = popularTagsFeature;
