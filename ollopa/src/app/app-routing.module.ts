import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'missions',
    loadChildren: () =>
      import('./features/missions/missions.module').then(
        (m) => m.MissionsModule
      ),
  },
  {
    path: 'producing',
    loadChildren: () =>
      import('./features/producing/producing.module').then(
        (m) => m.ProducingModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'knowledge-graph',
    loadChildren: () =>
      import('./features/knowledge-graph/knowledge-graph.module').then(
        (m) => m.KnowledgeGraphModule
      ),
  },
  {
    path: 'engines',
    loadChildren: () =>
      import('./features/engines/engines.module').then((m) => m.EnginesModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
