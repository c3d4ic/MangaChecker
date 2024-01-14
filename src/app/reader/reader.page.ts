import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../service/manga/manga.service';
import { Release } from '../enum';
import { IonContent, NavController } from '@ionic/angular';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {


  constructor(private route: ActivatedRoute, private mangaService: MangaService, private firebaseService: FirebaseService, private router: Router) { }

  @ViewChild(IonContent, {read: IonContent}) content: IonContent;

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
    // const mangaList = this.mangaService.updateChapterRead(this.mangaTitle, this.mangaChapter);
    // this.firebaseService.postData(mangaList);
  }

  back() {
    this.router.navigateByUrl('/home');
  }

  goToTop() {
    this.content.scrollToTop(1000);
  }

}
