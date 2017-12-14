import { TestBed, inject } from '@angular/core/testing';

import { WebsocketDetectionService } from './websocket-detection.service';

describe('WebsocketDetectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketDetectionService]
    });
  });

  it('should be created', inject([WebsocketDetectionService], (service: WebsocketDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
