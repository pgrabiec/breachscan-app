import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureReactionComponent } from './configure-reaction.component';

describe('ConfigureReactionComponent', () => {
  let component: ConfigureReactionComponent;
  let fixture: ComponentFixture<ConfigureReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
