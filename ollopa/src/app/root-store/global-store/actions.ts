import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_SECTION_REQUEST = '[Global] Get Section Request',
  GET_SECTION_FAILURE = '[Global] Get Section Failure',
  GET_SECTION_SUCCESS = '[Global] Get Section Success',
  SET_SECTION_REQUEST = '[Global] Set Section Request',
  SET_SECTION_FAILURE = '[Global] Set Section Failure',
  SET_SECTION_SUCCESS = '[Global] Set Section Success',
}

export class GetSectionRequestAction implements Action {
  readonly type = ActionTypes.GET_SECTION_REQUEST;
  constructor() {}
}

export class GetSectionFailureAction implements Action {
  readonly type = ActionTypes.GET_SECTION_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class GetSectionSuccessAction implements Action {
  readonly type = ActionTypes.GET_SECTION_SUCCESS;
  constructor(public payload: { section: string }) {}
}

export class SetSectionRequestAction implements Action {
  readonly type = ActionTypes.SET_SECTION_REQUEST;
  constructor(public payload: { section: string }) {}
}

export class SetSectionFailureAction implements Action {
  readonly type = ActionTypes.SET_SECTION_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class SetSectionSuccessAction implements Action {
  readonly type = ActionTypes.SET_SECTION_SUCCESS;
  constructor() {}
}



export type Actions =
  | GetSectionRequestAction
  | GetSectionFailureAction
  | GetSectionSuccessAction
  | SetSectionRequestAction
  | SetSectionFailureAction
  | SetSectionSuccessAction;
