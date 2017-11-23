import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringConfBriefComponent } from './monitoring-conf-brief.component';

describe('MonitoringConfBriefComponent', () => {
  let component: MonitoringConfBriefComponent;
  let fixture: ComponentFixture<MonitoringConfBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringConfBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringConfBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
