import { TestBed } from '@angular/core/testing';

import { PokeListService } from './poke-list.service';

describe('PokeListService', () => {
  let service: PokeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
