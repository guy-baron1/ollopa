// Main state of the application.
// For each feature store this interface needs to be updated
import { ProducingStoreState } from './producing-store/index';
import { GlobalStoreState } from './global-store';

export interface State {
  global: GlobalStoreState.State;
  producing: ProducingStoreState.State;
}
