import { TestBed } from '@angular/core/testing';

import { ReadDataFromJsonService } from './read-data-from-json.service';

describe('ReadDataFromJsonService', () => {
  let service: ReadDataFromJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadDataFromJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
