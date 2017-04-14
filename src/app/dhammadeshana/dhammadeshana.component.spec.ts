import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhammadeshanaComponent } from './dhammadeshana.component';

describe('DhammadeshanaComponent', () => {
  let component: DhammadeshanaComponent;
  let fixture: ComponentFixture<DhammadeshanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhammadeshanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhammadeshanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
