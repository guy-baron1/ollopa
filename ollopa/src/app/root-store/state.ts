// Main state of the application.
// For each feature store this interface needs to be updated
import { ProducingStoreState } from './producing-store/index';

export interface State {
  producing: ProducingStoreState.State;
}
