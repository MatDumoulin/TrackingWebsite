import { TestBed, inject } from '@angular/core/testing';

import { DataServiceManagerService } from './data-service-manager.service';

describe('DataServiceManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServiceManagerService]
    });
  });

  it('should be created', inject([DataServiceManagerService], (service: DataServiceManagerService) => {
    expect(service).toBeTruthy();
  }));
});
