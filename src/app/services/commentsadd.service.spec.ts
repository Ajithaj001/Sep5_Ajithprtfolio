import { TestBed } from '@angular/core/testing';

import { CommentsaddService } from './commentsadd.service';

describe('CommentsaddService', () => {
  let service: CommentsaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
