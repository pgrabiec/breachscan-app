import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRuleComponent } from './assign-rule.component';

describe('AssignRuleComponent', () => {
  let component: AssignRuleComponent;
  let fixture: ComponentFixture<AssignRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
