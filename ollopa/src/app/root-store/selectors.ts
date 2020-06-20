import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ProducingStoreSelectors } from './producing-store/index';
import { GlobalStoreSelectors } from './global-store';

// Root store selectors go here
// For example getting global loading state, global error, global isLoading, etc...

export const selectError: MemoizedSelector<object, string> = createSelector(
  ProducingStoreSelectors.selectProducingError,
  GlobalStoreSelectors.selectGlobalError,
  (producingError: string, globalError: string) => {
    return producingError || globalError;
  }
);
