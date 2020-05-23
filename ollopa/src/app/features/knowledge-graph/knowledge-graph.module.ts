import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeGraphRoutingModule } from './knowledge-graph-routing.module';
import { KnowledgeGraphComponent } from './knowledge-graph/knowledge-graph.component';


@NgModule({
  declarations: [KnowledgeGraphComponent],
  imports: [
    CommonModule,
    KnowledgeGraphRoutingModule
  ]
})
export class KnowledgeGraphModule { }
