import { TestBed } from '@angular/core/testing';

import { CerberusApiService } from './cerberus-api.service';

describe('CerberusApiService', () => {
  let service: CerberusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CerberusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
