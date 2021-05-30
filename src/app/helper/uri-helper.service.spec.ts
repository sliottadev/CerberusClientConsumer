import { TestBed } from '@angular/core/testing';

import { UriHelperService } from './uri-helper.service';

describe('UriHelperService', () => {
  let service: UriHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UriHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
