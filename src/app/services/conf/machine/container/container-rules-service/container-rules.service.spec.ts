import { TestBed, inject } from '@angular/core/testing';

import { ContainerRulesService } from './container-rules.service';

describe('ContainerRulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContainerRulesService]
    });
  });

  it('should be created', inject([ContainerRulesService], (service: ContainerRulesService) => {
    expect(service).toBeTruthy();
  }));
});
