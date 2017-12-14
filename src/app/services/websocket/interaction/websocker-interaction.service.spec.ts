import { TestBed, inject } from '@angular/core/testing';

import { WebsocketInteractionService } from './websocker-interaction.service';

describe('WebsocketInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketInteractionService]
    });
  });

  it('should be created', inject([WebsocketInteractionService], (service: WebsocketInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
