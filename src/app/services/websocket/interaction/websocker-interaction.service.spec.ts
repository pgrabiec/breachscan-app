import { TestBed, inject } from '@angular/core/testing';

import { WebSocketInteractionService } from './websocker-interaction.service';

describe('WebSocketInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketInteractionService]
    });
  });

  it('should be created', inject([WebSocketInteractionService], (service: WebSocketInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
