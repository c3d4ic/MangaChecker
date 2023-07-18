import { Component, OnInit } from '@angular/core';
import { Manga } from '../enum';
import { FirebaseService } from '../service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mangas: Manga[] = [];

  constructor(private firebaseService: FirebaseService, private router: Router) { }



   ngOnInit() {
    this.firebaseService.getData().then(data => {
      this.mangas = data;
    });
  }

  onChapter(idManga: Number, idRelease: Number) {
    this.router.navigateByUrl(`/reader/${idManga}/${idRelease}`)
  }

  

}
