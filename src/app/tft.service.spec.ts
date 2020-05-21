import { TestBed } from '@angular/core/testing';

import { TFTService } from './tft.service';

describe('TFTService', () => {
  let service: TFTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TFTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
