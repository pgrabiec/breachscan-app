import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureDetectionComponent } from './configure-detection.component';

describe('ConfigureDetectionComponent', () => {
  let component: ConfigureDetectionComponent;
  let fixture: ComponentFixture<ConfigureDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
