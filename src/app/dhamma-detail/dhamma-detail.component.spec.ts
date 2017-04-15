import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhammaDetailComponent } from './dhamma-detail.component';

describe('DhammaDetailComponent', () => {
  let component: DhammaDetailComponent;
  let fixture: ComponentFixture<DhammaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhammaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhammaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
