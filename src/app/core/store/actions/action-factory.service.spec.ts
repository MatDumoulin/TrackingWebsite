import { TestBed, inject } from '@angular/core/testing';

import { ActionFactoryService } from './action-factory.service';

describe('ActionFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionFactoryService]
    });
  });

  it('should be created', inject([ActionFactoryService], (service: ActionFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
