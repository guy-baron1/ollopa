import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function producingReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.GET_SOUNDS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ActionTypes.GET_SOUNDS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case ActionTypes.GET_SOUNDS_SUCCESS:
      return {
        ...state,
        sounds: action.payload.sounds,
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
