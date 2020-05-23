import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';

// TODO: These routes will redirect to different searches
const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'gists',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
