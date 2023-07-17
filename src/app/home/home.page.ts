import { Component, OnInit } from '@angular/core';
import { Manga } from '../enum';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mangas: Manga[] = [];

  constructor(private firebaseService: FirebaseService) { }



   ngOnInit() {
    this.firebaseService.getData().then(data => {
      this.mangas = data;
    });
  }

  

}
