import { TestBed } from '@angular/core/testing';

import { AuxStartshipService } from './aux-startship.service';

describe('AuxStartshipService', () => {
  let service: AuxStartshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuxStartshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
