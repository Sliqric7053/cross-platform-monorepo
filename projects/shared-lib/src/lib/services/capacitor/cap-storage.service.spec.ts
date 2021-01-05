import { TestBed } from "@angular/core/testing";

import { CapacitorStorageService } from "./cap-storage.service";

describe("CapacitorStorageService", () => {
  let service: CapacitorStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacitorStorageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
