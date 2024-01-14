import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaListPage } from './manga-list.page';

const routes: Routes = [
  {
    path: '',
    component: MangaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaListPageRoutingModule {}
