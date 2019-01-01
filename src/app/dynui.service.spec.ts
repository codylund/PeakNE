import { TestBed } from '@angular/core/testing';

import { DynUiService } from './dynui.service';

describe('DynUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynUiService = TestBed.get(DynUiService);
    expect(service).toBeTruthy();
  });
});
