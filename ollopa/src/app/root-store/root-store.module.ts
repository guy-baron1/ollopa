import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProducingStoreModule } from './producing-store';
import { GlobalStoreModule } from './global-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProducingStoreModule,
    GlobalStoreModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
