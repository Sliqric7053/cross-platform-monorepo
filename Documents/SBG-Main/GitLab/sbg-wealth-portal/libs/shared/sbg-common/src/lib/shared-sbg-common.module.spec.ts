import { async, TestBed } from '@angular/core/testing';
import { SbgCommonModule } from './shared-sbg-common';

describe('SbgCommonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SbgCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SbgCommonModule).toBeDefined();
  });
});
