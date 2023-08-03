import { Injectable } from '@angular/core';
import { getDatabase, ref, get, set } from '@angular/fire/database';
import { getApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Manga, Release } from '../enum';
import { MangaService } from './manga/manga.service';
import { Preferences } from '@capacitor/preferences';


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
        }).then(async mangas => {
            console.log("MANGAS GET : ", mangas)
            await Preferences.set({
                key: 'mangas',
                value: JSON.stringify(mangas)
            });
            this.mangaService.setMangaList(mangas);
            return mangas;
        });

    }

    postData(mangas: Array<Manga>) {
        set(this.ref, mangas).then((result => {
            console.log("Data is up to date")
        })).catch((error) => {
            console.error("Failed with error: " + error)
        })
    }

    updateMangaIsRead(mangas: Array<Manga>) {
        this.postData(mangas);
    }
}
