import { TestBed } from '@angular/core/testing';

import { AuxStartshipService } from './aux-startship.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuxStartshipService', () => {
  let service: AuxStartshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule]
    });
    service = TestBed.inject(AuxStartshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
