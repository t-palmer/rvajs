import { TestBed } from '@angular/core/testing';

import { StatefullService } from './statefull.service';

describe('StatefullService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatefullService = TestBed.get(StatefullService);
    expect(service).toBeTruthy();
  });
});
