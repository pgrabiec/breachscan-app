import { TestBed, inject } from '@angular/core/testing';

import { WebsocketMonitoringService } from './websocket-monitoring.service';

describe('WebsocketMonitoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketMonitoringService]
    });
  });

  it('should be created', inject([WebsocketMonitoringService], (service: WebsocketMonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
