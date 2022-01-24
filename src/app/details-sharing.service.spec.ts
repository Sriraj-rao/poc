import { TestBed } from '@angular/core/testing';

import { DetailsSharingService } from './details-sharing.service';

describe('DetailsSharingService', () => {
  let service: DetailsSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
