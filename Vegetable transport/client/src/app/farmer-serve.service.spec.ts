import { TestBed } from '@angular/core/testing';

import { FarmerServeService } from './farmer-serve.service';

describe('FarmerServeService', () => {
  let service: FarmerServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
