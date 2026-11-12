import { TestBed } from '@angular/core/testing';
import { Parkservice } from './parkservice';

describe('Parkservice', () => {
  let service: Parkservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Parkservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
