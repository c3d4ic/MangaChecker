import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaListPageRoutingModule } from './manga-list-routing.module';

import { MangaListPage } from './manga-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaListPageRoutingModule
  ],
  declarations: [MangaListPage]
})
export class MangaListPageModule {}
