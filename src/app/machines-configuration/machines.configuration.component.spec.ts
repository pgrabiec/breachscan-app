import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesConfigurationComponent } from './machines.configuration.component';

describe('MachinesConfigurationComponent', () => {
  let component: MachinesConfigurationComponent;
  let fixture: ComponentFixture<MachinesConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinesConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
