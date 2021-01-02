import { Component } from "@angular/core";
import { GameEngineLibService } from "projects/game-engine-lib/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "tetris";

  constructor(private engineService: GameEngineLibService) {
    console.info(engineService.testing);
  }
}
