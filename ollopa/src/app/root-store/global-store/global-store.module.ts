import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GlobalEffects } from './effects';
import { globalReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('global', globalReducer),
    EffectsModule.forFeature([GlobalEffects]),
  ],
  providers: [GlobalEffects],
})
export class GlobalStoreModule {}
