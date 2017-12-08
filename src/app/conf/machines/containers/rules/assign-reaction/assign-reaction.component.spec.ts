import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignReactionComponent } from './assign-reaction.component';

describe('AssignReactionComponent', () => {
  let component: AssignReactionComponent;
  let fixture: ComponentFixture<AssignReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
