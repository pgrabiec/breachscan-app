import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfAddContainerComponent } from './conf-add-container.component';

describe('ConfAddContainerComponent', () => {
  let component: ConfAddContainerComponent;
  let fixture: ComponentFixture<ConfAddContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfAddContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
