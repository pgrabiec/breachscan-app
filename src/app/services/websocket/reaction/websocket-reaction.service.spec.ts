import { TestBed, inject } from '@angular/core/testing';

import { WebsocketReactionService } from './websocket-reaction.service';

describe('WebsocketReactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketReactionService]
    });
  });

  it('should be created', inject([WebsocketReactionService], (service: WebsocketReactionService) => {
    expect(service).toBeTruthy();
  }));
});
