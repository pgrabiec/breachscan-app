import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactionRuleComponent } from './add-reaction-rule.component';

describe('AddReactionRuleComponent', () => {
  let component: AddReactionRuleComponent;
  let fixture: ComponentFixture<AddReactionRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReactionRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReactionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
