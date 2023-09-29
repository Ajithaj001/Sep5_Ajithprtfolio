import { TestBed } from '@angular/core/testing';

import { TimecaptureService } from './timecapture.service';

describe('TimecaptureService', () => {
  let service: TimecaptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimecaptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
