import { TestBed, inject } from '@angular/core/testing';

import { RulesService } from './rules-service.service';

describe('RulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RulesService]
    });
  });

  it('should be created', inject([RulesService], (service: RulesService) => {
    expect(service).toBeTruthy();
  }));
});
