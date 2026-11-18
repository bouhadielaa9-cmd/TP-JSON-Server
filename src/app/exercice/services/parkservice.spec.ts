import { TestBed } from '@angular/core/testing';
import { ParkService } from './parkservice';

describe('Parkservice', () => {
  let service: ParkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
