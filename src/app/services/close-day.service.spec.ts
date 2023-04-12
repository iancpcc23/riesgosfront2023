import { CloseDayService } from './riesgos.service';
import { TestBed } from '@angular/core/testing';

describe('CloseDayService', () => {
  let service: CloseDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
