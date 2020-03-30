import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducingComponent } from './producing/producing.component';


const routes: Routes = [
  {
    path: '',
    component: ProducingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducingRoutingModule { }
