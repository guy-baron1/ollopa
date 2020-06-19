import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { Sound } from '../../shared/models/sound';
import { State } from './state';

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): any => state.isLoading;
const getSounds = (state: State): any => state.sounds;

export const selectProducingState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('producing');

export const selectProducingError: MemoizedSelector<
  object,
  string
> = createSelector(selectProducingState, getError);

export const selectProducingIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectProducingState, getIsLoading);

export const selectProducingSounds: MemoizedSelector<
  object,
  Sound[]
> = createSelector(selectProducingState, getSounds);
