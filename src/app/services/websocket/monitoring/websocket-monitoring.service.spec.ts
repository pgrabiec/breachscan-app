import { TestBed, inject } from '@angular/core/testing';

import { WebSocketMonitoringService } from './websocket-monitoring.service';

describe('WebSocketMonitoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketMonitoringService]
    });
  });

  it('should be created', inject([WebSocketMonitoringService], (service: WebSocketMonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
