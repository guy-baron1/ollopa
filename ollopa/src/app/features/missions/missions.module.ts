import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsComponent } from './missions/missions.component';
import { MissionsRoutingModule } from './missions-routing.module';

@NgModule({
  declarations: [MissionsComponent],
  imports: [CommonModule, MissionsRoutingModule],
})
export class MissionsModule {}
