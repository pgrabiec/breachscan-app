import { TestBed, inject } from '@angular/core/testing';

import { WebSocketDetectionService } from './websocket-detection.service';

describe('WebSocketDetectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketDetectionService]
    });
  });

  it('should be created', inject([WebSocketDetectionService], (service: WebSocketDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
