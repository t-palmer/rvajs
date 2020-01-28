import { TestBed } from '@angular/core/testing';

import { TaskMultiService } from './task-multi.service';

describe('TaskMultiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskMultiService = TestBed.get(TaskMultiService);
    expect(service).toBeTruthy();
  });
});
