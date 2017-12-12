import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetectionRuleComponent } from './add-detection-rule.component';

describe('AddDetectionRuleComponent', () => {
  let component: AddDetectionRuleComponent;
  let fixture: ComponentFixture<AddDetectionRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetectionRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetectionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
