import { TestBed } from '@angular/core/testing';

import { GetTurnServiceService } from './get-turn-service.service';

describe('GetTurnServiceService', () => {
  let service: GetTurnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTurnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
