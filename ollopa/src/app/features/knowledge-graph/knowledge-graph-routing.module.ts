import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowledgeGraphComponent } from './knowledge-graph/knowledge-graph.component';

const routes: Routes = [{ path: '', component: KnowledgeGraphComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeGraphRoutingModule { }
