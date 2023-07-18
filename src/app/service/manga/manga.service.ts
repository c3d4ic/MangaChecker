import { Injectable } from '@angular/core';
import { Manga, Release } from 'src/app/enum';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  mangaList: Manga[] = [];

  constructor() { }

  setMangaList(list: Manga[]) {
    this.mangaList = list;
  }

  getMangaList(): Manga[] {
    return this.mangaList;
  }

  getMangaById(id: number): Manga {
    return this.mangaList[id];
  }
  getReleaseById(idManga: number, idRelease: number): Release {
    console.log("this.mangaList[idManga] : ", this.mangaList[idManga]);
    return this.mangaList[idManga].release[idRelease]; 
  }

}
