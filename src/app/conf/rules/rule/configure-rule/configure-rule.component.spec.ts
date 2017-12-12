import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureRuleComponent } from './configure-rule.component';

describe('ConfigureRuleComponent', () => {
  let component: ConfigureRuleComponent;
  let fixture: ComponentFixture<ConfigureRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
