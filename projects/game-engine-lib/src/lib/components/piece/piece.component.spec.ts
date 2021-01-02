import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Piece } from "./piece.component";

describe("Piece", () => {
  let component: Piece;
  let fixture: ComponentFixture<Piece>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Piece],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piece);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
