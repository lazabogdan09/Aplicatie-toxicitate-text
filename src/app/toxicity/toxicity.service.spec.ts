import { TestBed } from '@angular/core/testing';

import { ToxicityService } from './toxicity.service';

describe('ToxicityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToxicityService = TestBed.get(ToxicityService);
    expect(service).toBeTruthy();
  });
});
