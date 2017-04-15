import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3DeshanaComponent } from './mp3-deshana.component';

describe('Mp3DeshanaComponent', () => {
  let component: Mp3DeshanaComponent;
  let fixture: ComponentFixture<Mp3DeshanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mp3DeshanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3DeshanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
