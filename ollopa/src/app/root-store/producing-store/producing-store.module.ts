import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProducingEffects } from './effects';
import { producingReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('producing', producingReducer),
    EffectsModule.forFeature([ProducingEffects]),
  ],
  providers: [ProducingEffects],
})
export class ProducingStoreModule {}
