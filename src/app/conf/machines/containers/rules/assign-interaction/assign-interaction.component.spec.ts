import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInteractionComponent } from './assign-interaction.component';

describe('AssignInteractionComponent', () => {
  let component: AssignInteractionComponent;
  let fixture: ComponentFixture<AssignInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
