import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducingComponent } from './producing/producing.component';
import { ProducingRoutingModule } from './producing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProducingComponent],
  imports: [CommonModule, ProducingRoutingModule, SharedModule],
})
export class ProducingModule {}
