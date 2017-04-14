import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubPirithComponent } from './home-sub-pirith.component';

describe('HomeSubPirithComponent', () => {
  let component: HomeSubPirithComponent;
  let fixture: ComponentFixture<HomeSubPirithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSubPirithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubPirithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
