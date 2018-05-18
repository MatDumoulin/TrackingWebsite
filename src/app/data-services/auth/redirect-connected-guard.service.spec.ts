import { TestBed, inject } from '@angular/core/testing';

import { RedirectConnectedGuardService } from './redirect-connected-guard.service';

describe('RedirectConnectedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectConnectedGuardService]
    });
  });

  it('should be created', inject([RedirectConnectedGuardService], (service: RedirectConnectedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
