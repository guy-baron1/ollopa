// Bundling exports of root store
import { RootStoreModule } from './root-store.module';
import * as RootStoreSelectors from './selectors';
import * as RootStoreState from './state';
export * from './producing-store';
export { RootStoreState, RootStoreSelectors, RootStoreModule };
