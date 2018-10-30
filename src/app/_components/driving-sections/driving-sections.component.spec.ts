import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingSectionsComponent } from './driving-sections.component';

describe('DrivingSectionsComponent', () => {
  let component: DrivingSectionsComponent;
  let fixture: ComponentFixture<DrivingSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
