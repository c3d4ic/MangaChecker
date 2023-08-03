import { Component, OnInit } from '@angular/core';
import { Manga } from '../enum';
import { Router } from '@angular/router';
import { MangaService } from '../service/manga/manga.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mangas: Manga[] = [];

  constructor(public mangaService: MangaService, private router: Router) { }

  ngOnInit() {
  }
  onChapter(idManga: String, idRelease: String) {
    this.router.navigateByUrl(`/reader/${idManga}/${idRelease}`)
  }
}
