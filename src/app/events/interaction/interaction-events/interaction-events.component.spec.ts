import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionEventsComponent } from './interaction-events.component';

describe('InteractionEventsComponent', () => {
  let component: InteractionEventsComponent;
  let fixture: ComponentFixture<InteractionEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
