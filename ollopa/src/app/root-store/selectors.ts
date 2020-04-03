import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ProducingStoreSelectors } from './producing-store/index';

// Root store selectors go here
// For example getting current user, global loading state, global error, etc...

export const selectError: MemoizedSelector<object, string> = createSelector(
  ProducingStoreSelectors.selectProducingError,
  (producingError: string) => {
    return producingError;
  }
);
