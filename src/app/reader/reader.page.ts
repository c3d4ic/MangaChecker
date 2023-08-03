import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../service/manga/manga.service';
import { Release } from '../enum';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {

  pages = [
    "https://s1.cdn-manga.com/files/WP-manga/data/1818/ab2aad44ebb7c450a00d486a4a0150f8/1-o.jpg",
    "https://s1.cdn-manga.com/files/WP-manga/data/1818/ab2aad44ebb7c450a00d486a4a0150f8/2-o.jpg",
    "https://s1.cdn-manga.com/files/WP-manga/data/1818/ab2aad44ebb7c450a00d486a4a0150f8/3-o.jpg",
    "https://s1.cdn-manga.com/files/WP-manga/data/1818/ab2aad44ebb7c450a00d486a4a0150f8/4-o.jpg",
  ]
  constructor(private route: ActivatedRoute, private mangaService: MangaService, private firebaseService: FirebaseService, private router: Router) { }

  release: any;
  mangaTitle: String = '';
  mangaChapter: String = '';

  ngOnInit() {

    this.route.params.subscribe((params: any) => {

      this.mangaTitle = params['mangaTitle'] ? params['mangaTitle'] : 0;
      this.mangaChapter = params['mangaChapter'] ? params['mangaChapter'] : 0;
     this.release = this.mangaService.getReleaseById(params['mangaTitle'], params['mangaChapter']);
     this.updateChapterRead();
    });

    
  }

  updateChapterRead() {
    const mangaList = this.mangaService.updateChapterRead(this.mangaTitle, this.mangaChapter);
    this.firebaseService.postData(mangaList);
  }

  back() {
    this.router.navigateByUrl('/home');
  }

}
