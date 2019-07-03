import { TestBed } from '@angular/core/testing';

import { DeadlineService } from './deadline.service';

describe('DeadlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeadlineService = TestBed.get(DeadlineService);
    expect(service).toBeTruthy();
  });
});
