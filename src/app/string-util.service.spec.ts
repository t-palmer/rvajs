import { TestBed } from '@angular/core/testing';

import { StringUtilService } from './string-util.service';

describe('StringUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StringUtilService = TestBed.get(StringUtilService);
    expect(service).toBeTruthy();
  });
});
