import { TestBed } from '@angular/core/testing';

import { RoutingparamService } from './routingparam.service';

describe('RoutingparamService', () => {
  let service: RoutingparamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingparamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
