import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function globalReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.GET_SECTION_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ActionTypes.GET_SECTION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case ActionTypes.GET_SECTION_SUCCESS:
      return {
        ...state,
        section: action.payload.section,
        error: null,
        isLoading: false,
      };
    case ActionTypes.SET_SECTION_REQUEST:
      return {
        ...state,
        section: action.payload.section,
        error: null,
        isLoading: true,
      };
    case ActionTypes.SET_SECTION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case ActionTypes.SET_SECTION_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
