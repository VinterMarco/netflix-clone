import { TestBed } from '@angular/core/testing';

import { SharedEmailService } from './shared-email.service';

describe('SharedEmailService', () => {
  let service: SharedEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
