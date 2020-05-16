export interface State {
  section: string;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  section: null,
  isLoading: false,
  error: null,
};
