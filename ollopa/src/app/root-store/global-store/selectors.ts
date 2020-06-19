import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { State } from './state';

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): any => state.isLoading;
const getSection = (state: State): any => state.section;

export const selectGlobalState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('global');

export const selectGlobalError: MemoizedSelector<
  object,
  string
> = createSelector(selectGlobalState, getError);

export const selectGlobalIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectGlobalState, getIsLoading);

export const selectGlobalSection: MemoizedSelector<
  object,
  string
> = createSelector(selectGlobalState, getSection);
