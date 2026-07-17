import { TestBed } from '@angular/core/testing';

import { GetTimingsService } from './get-timings.service';

describe('GetTimingsService', () => {
  let service: GetTimingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTimingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
