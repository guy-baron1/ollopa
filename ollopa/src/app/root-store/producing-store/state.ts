import { Sound } from '../../shared/models/sound';

export interface State {
  sounds: Sound[] | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  sounds: [{ path: 'initialStatePath' }],
  isLoading: false,
  error: null,
};
