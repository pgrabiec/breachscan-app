import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerConfigurationComponent } from './container-configuration.component';

describe('ContainerConfigurationComponent', () => {
  let component: ContainerConfigurationComponent;
  let fixture: ComponentFixture<ContainerConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
