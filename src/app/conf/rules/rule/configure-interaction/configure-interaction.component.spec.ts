import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureInteractionComponent } from './configure-interaction.component';

describe('ConfigureInteractionComponent', () => {
  let component: ConfigureInteractionComponent;
  let fixture: ComponentFixture<ConfigureInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
