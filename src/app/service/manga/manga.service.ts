import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';
import { Manga, Release } from 'src/app/enum';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  mangaListNews: Manga[] = [];
  mangaList: Manga[] = [];

  constructor(
  ) { }

  setMangaList(list: Manga[]) {
    this.mangaList = list;
  }

  setMangaListNews(list: Manga[]) {
    this.mangaListNews = list;
  }

  getMangaList(): Manga[] {
    return this.mangaList;
  }

  getMangaById(id: number): Manga {
    return this.mangaList[id];
  }
  getReleaseById(mangaTitle: String, mangaChapter: String): any {

    const manga = this.mangaList.find((manga) => manga.title === mangaTitle);

    return manga?.release.find((release) => release.chapter === mangaChapter);
  }

  filterByRead(listManga: Manga[]): Manga[] {

    var unreadMangas: Array<Manga> = [];
    var unreadManga: Manga;
    for (let indexManga = 0; indexManga <= listManga.length - 1; indexManga++) {
      var unreadReleases: Array<Release> = [];
      unreadManga = {
        image: listManga[indexManga].image,
        release: [],
        title: listManga[indexManga].title,
      };
      if (listManga[indexManga].release) {
        for (let indexRelease = 0; indexRelease <= listManga[indexManga].release.length - 1; indexRelease++) {
          if (!listManga[indexManga].release[indexRelease].read) {
            unreadReleases.push(listManga[indexManga].release[indexRelease]);
          }
        }
        unreadManga.release = unreadReleases;
      }
      if(unreadManga.release.length > 0) {
        unreadMangas.push(unreadManga);
      }
      
    }
   
    console.log("🚀 ~ file: manga.service.ts:59 ~ MangaService ~ filterByRead ~ listMangaFiltered:", unreadMangas)

    return unreadMangas

  }

  updateChapterRead(mangaTitle: String, mangaChapter: String) {
    const mangaId = this.mangaList.findIndex((manga) => { if (manga.title == mangaTitle) { return true; } else { return false; } });
    if (mangaId >= 0) {
      const chapterId = this.mangaList[mangaId].release.findIndex((release) => { if (release.chapter == mangaChapter) { return true; } else { return false; } });
      if (chapterId >= 0) {
        this.mangaList[mangaId].release[chapterId].read = true;
      }
    }
    return this.mangaList;
  }



}
