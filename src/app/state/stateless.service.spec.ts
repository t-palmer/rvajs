import { TestBed } from '@angular/core/testing';

import { StatelessService } from './stateless.service';

describe('StatelessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatelessService = TestBed.get(StatelessService);
    expect(service).toBeTruthy();
  });
});
