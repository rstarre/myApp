import { TestBed } from '@angular/core/testing';

import { TeacherStrictGuard } from './teacher-strict.guard';

describe('TeacherStrictGuard', () => {
  let guard: TeacherStrictGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeacherStrictGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
