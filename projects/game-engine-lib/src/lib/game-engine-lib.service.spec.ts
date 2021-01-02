import { TestBed } from '@angular/core/testing';

import { GameEngineLibService } from './game-engine-lib.service';

describe('GameEngineLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameEngineLibService = TestBed.get(GameEngineLibService);
    expect(service).toBeTruthy();
  });
});
