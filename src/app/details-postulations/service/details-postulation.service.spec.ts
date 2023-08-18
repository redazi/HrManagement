import { TestBed } from '@angular/core/testing';

import { DetailsPostulationService } from './details-postulation.service';

describe('DetailsPostulationService', () => {
  let service: DetailsPostulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsPostulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
