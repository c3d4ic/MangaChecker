import { Injectable } from '@angular/core';
import { getDatabase, ref, get } from '@angular/fire/database';
import { getApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Manga, Release } from '../enum';
import { MangaService } from './manga/manga.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  protected database: any
  protected ref: any
  firestore: Firestore = inject(Firestore);

  constructor(private mangaService: MangaService) {
    const app = getApp();
    this.database = getDatabase(app);
        this.ref = ref(this.database, 'data/manga');
  }

  getData() {
         return get(this.ref).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                console.log("No data available")
                return []
            }
        }).catch((error) => {
            console.error(error)
            return []
        }).then(mangas => {
            const data = this.filterByRead(mangas);
            this.mangaService.setMangaList(data);
            return data;
        });

    }

    filterByRead(listManga: Manga[]): Manga[] {
        console.log("listManga : ", listManga);
        let listMangaFiltered : Manga[] = [];
        let isRead: Boolean = false;
        let isNew: Boolean = false;

        listManga.forEach((manga: Manga) => {
            if(manga.release) {
                manga.release.forEach((release: Release) => {
                    isRead =  release.read ? true : false;
                   if(!isRead) isNew = true; return;
                });
            }
            
            if(isNew) {
                listMangaFiltered.push(manga);
            }
            isNew = false;
        });
        console.log("listMangaFiltered : ", listMangaFiltered);
        return listMangaFiltered

    }

    updateMangaIsRead() {
        
    }
}
