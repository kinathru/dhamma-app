import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubBooksComponent } from './home-sub-books.component';

describe('HomeSubBooksComponent', () => {
  let component: HomeSubBooksComponent;
  let fixture: ComponentFixture<HomeSubBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSubBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
