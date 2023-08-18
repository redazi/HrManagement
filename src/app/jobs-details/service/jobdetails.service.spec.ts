import { TestBed } from '@angular/core/testing';

import { JobdetailsService } from './jobdetails.service';

describe('JobdetailsService', () => {
  let service: JobdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
