import { Action } from '@ngrx/store';
import { Sound } from '../../shared/models/sound';

export enum ActionTypes {
  GET_SOUNDS_REQUEST = '[Producing] Get Sounds Request',
  GET_SOUNDS_FAILURE = '[Producing] Get Sounds Failure',
  GET_SOUNDS_SUCCESS = '[Producing] Get Sounds Success',
}

export class GetSoundsRequestAction implements Action {
  readonly type = ActionTypes.GET_SOUNDS_REQUEST;
  constructor(public payload: {parameter: string}) {}
}

export class GetSoundsFailureAction implements Action {
  readonly type = ActionTypes.GET_SOUNDS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class GetSoundsSuccessAction implements Action {
  readonly type = ActionTypes.GET_SOUNDS_SUCCESS;
  constructor(public payload: {sounds: Sound[]}) {}
}

export type Actions = GetSoundsRequestAction | GetSoundsFailureAction | GetSoundsSuccessAction;
