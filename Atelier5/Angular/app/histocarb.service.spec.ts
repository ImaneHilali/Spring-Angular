import { TestBed } from '@angular/core/testing';

import { HistocarbService } from './histocarb.service';

describe('HistocarbService', () => {
  let service: HistocarbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistocarbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
