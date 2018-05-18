import { TestBed, inject } from '@angular/core/testing';

import { TrackeeService } from './trackee.service';

describe('TrackeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackeeService]
    });
  });

  it('should be created', inject([TrackeeService], (service: TrackeeService) => {
    expect(service).toBeTruthy();
  }));
});
