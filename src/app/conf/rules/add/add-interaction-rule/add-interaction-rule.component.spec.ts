import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInteractionRuleComponent } from './add-interaction-rule.component';

describe('AddInteractionRuleComponent', () => {
  let component: AddInteractionRuleComponent;
  let fixture: ComponentFixture<AddInteractionRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInteractionRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInteractionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
