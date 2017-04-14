import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PirithComponent } from './pirith.component';

describe('PirithComponent', () => {
  let component: PirithComponent;
  let fixture: ComponentFixture<PirithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PirithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PirithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
