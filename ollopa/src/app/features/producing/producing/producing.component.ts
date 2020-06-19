import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sound } from '../../../shared/models/sound';
import {
  RootStoreState,
  ProducingStoreActions,
  ProducingStoreSelectors,
} from '../../../root-store';

@Component({
  selector: 'apo-producing',
  templateUrl: './producing.component.html',
  styleUrls: ['./producing.component.scss'],
})
export class ProducingComponent implements OnInit {
  sounds$: Observable<Sound[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit(): void {
    this.sounds$ = this.store.select(
      ProducingStoreSelectors.selectProducingSounds
    );
    this.isLoading$ = this.store.select(
      ProducingStoreSelectors.selectProducingIsLoading
    );
    this.error$ = this.store.select(
      ProducingStoreSelectors.selectProducingError
    );
    this.store.dispatch(
      new ProducingStoreActions.GetSoundsRequestAction({
        parameter: 'tempParameter',
      })
    );
  }
}
