import { TestBed } from '@angular/core/testing';

import { GroupeMuscleService } from './groupe-muscle.service';

describe('GroupeMuscleService', () => {
  let service: GroupeMuscleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeMuscleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
