import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaDetailPage } from './manga-detail.page';

describe('MangaDetailPage', () => {
  let component: MangaDetailPage;
  let fixture: ComponentFixture<MangaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MangaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
