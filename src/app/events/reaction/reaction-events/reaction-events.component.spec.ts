import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionEventsComponent } from './reaction-events.component';

describe('ReactionEventsComponent', () => {
  let component: ReactionEventsComponent;
  let fixture: ComponentFixture<ReactionEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
