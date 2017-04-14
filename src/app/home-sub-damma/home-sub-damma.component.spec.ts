import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubDammaComponent } from './home-sub-damma.component';

describe('HomeSubDammaComponent', () => {
  let component: HomeSubDammaComponent;
  let fixture: ComponentFixture<HomeSubDammaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSubDammaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubDammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
