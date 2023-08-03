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
    let listMangaFiltered: Manga[] = [];
    let isRead: Boolean = false;
    let isNew: Boolean = false;

    listManga.forEach((manga: Manga) => {
        if (manga.release) {
            manga.release.forEach((release: Release) => {
                isRead = release.read ? true : false;
                if (!isRead) isNew = true; return;
            });
        }

        if (isNew) {
            listMangaFiltered.push(manga);
        }
        isNew = false;
    });
    return listMangaFiltered

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
