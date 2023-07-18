import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../service/manga/manga.service';
import { Release } from '../enum';

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
  constructor(private route: ActivatedRoute, private mangaService: MangaService) { }

  release: any;
  idManga: Number = 0
  idRelease: Number = 0

  ngOnInit() {

    this.route.params.subscribe((params: any) => {

      this.idManga = params['idManga'] ? params['idManga'] : 0;
      this.idRelease = params['idRelease'] ? params['idRelease'] : 0;
      
     this.release = this.mangaService.getReleaseById(params['idManga'], params['idRelease']);

     console.log("params['idManga'] : ",this.release )

    });


  }

}
