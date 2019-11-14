import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleService = TestBed.get(SimpleService);
    expect(service).toBeTruthy();
  });
});
