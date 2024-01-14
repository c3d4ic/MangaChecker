import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaDetailPageRoutingModule } from './manga-detail-routing.module';

import { MangaDetailPage } from './manga-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaDetailPageRoutingModule
  ],
  declarations: [MangaDetailPage]
})
export class MangaDetailPageModule {}
