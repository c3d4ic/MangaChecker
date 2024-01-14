import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaListPage } from './manga-list.page';

describe('MangaListPage', () => {
  let component: MangaListPage;
  let fixture: ComponentFixture<MangaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MangaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
