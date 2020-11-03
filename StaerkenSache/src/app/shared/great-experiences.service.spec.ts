import { TestBed } from '@angular/core/testing';

import { GreatExperiencesService } from './great-experiences.service';

describe('GreatExperiencesService', () => {
  let service: GreatExperiencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatExperiencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
