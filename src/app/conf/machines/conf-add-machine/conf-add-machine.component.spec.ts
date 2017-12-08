import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfAddMachineComponent } from './conf-add-machine.component';

describe('ConfAddMachineComponent', () => {
  let component: ConfAddMachineComponent;
  let fixture: ComponentFixture<ConfAddMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfAddMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfAddMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
