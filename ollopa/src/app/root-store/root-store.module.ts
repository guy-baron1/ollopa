import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProducingStoreModule } from './producing-store/producing-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProducingStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
