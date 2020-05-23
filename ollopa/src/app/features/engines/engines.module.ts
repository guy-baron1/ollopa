import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnginesRoutingModule } from './engines-routing.module';
import { EnginesComponent } from './engines/engines.component';


@NgModule({
  declarations: [EnginesComponent],
  imports: [
    CommonModule,
    EnginesRoutingModule
  ]
})
export class EnginesModule { }
