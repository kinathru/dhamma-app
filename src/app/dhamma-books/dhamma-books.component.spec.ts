import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhammaBooksComponent } from './dhamma-books.component';

describe('DhammaBooksComponent', () => {
  let component: DhammaBooksComponent;
  let fixture: ComponentFixture<DhammaBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhammaBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhammaBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
