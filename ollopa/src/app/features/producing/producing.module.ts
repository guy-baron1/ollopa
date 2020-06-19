import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducingComponent } from './producing/producing.component';
import { ProducingRoutingModule } from './producing-routing.module';

@NgModule({
  declarations: [ProducingComponent],
  imports: [CommonModule, ProducingRoutingModule],
})
export class ProducingModule {}
