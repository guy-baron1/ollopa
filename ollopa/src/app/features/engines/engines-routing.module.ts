import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnginesComponent } from './engines/engines.component';

const routes: Routes = [{ path: '', component: EnginesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnginesRoutingModule {}
