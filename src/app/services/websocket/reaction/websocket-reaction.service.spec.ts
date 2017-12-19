import { TestBed, inject } from '@angular/core/testing';

import { WebSocketReactionService } from './websocket-reaction.service';

describe('WebSocketReactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketReactionService]
    });
  });

  it('should be created', inject([WebSocketReactionService], (service: WebSocketReactionService) => {
    expect(service).toBeTruthy();
  }));
});
