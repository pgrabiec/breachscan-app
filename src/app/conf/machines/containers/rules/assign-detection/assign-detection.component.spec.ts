import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDetectionComponent } from './assign-detection.component';

describe('AssignDetectionComponent', () => {
  let component: AssignDetectionComponent;
  let fixture: ComponentFixture<AssignDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
