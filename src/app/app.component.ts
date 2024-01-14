import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { MangaService } from './service/manga/manga.service';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private mangaService: MangaService, private firebaseService: FirebaseService) {
   this.initStorage();
   this.firebaseService.getData().then(data => {
    this.mangaService.setMangaList(data);

    const news = this.mangaService.filterByRead(data);
    console.log("NEW REALEASE : ", news);
    this.mangaService.setMangaListNews(news);
  });
  }

  async initStorage() {
    const { value } = await Preferences.get({ key: 'mangas' });
    if(value) {
      const mangas = JSON.parse(value);
      const news = this.mangaService.filterByRead(mangas);
      this.mangaService.setMangaListNews(news);
      this.mangaService.setMangaList(mangas);
    }
  }
}
