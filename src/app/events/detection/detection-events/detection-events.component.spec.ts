import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionEventsComponent } from './detection-events.component';

describe('DetectionEventsComponent', () => {
  let component: DetectionEventsComponent;
  let fixture: ComponentFixture<DetectionEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
