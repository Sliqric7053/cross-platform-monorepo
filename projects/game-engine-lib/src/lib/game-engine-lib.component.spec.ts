import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEngineLibComponent } from './game-engine-lib.component';

describe('GameEngineLibComponent', () => {
  let component: GameEngineLibComponent;
  let fixture: ComponentFixture<GameEngineLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEngineLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEngineLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
