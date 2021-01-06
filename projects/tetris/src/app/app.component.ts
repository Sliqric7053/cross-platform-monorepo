import { Component, OnInit } from "@angular/core";
import { ElectronService, PlatformService } from "@shared-lib";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "tetris";

  constructor(
    private platform: PlatformService,
    private electronService: ElectronService
  ) {}

  async ngOnInit() {
    if (this.platform.isElectron) {
      console.log("Run in electron");
      // console.log(process.env);
      console.log("Electron ipcRenderer", this.electronService.ipcRenderer);
      console.log("NodeJS childProcess", this.electronService.childProcess);
    } else if (this.platform.isNative) {
      console.log("Run in native");
    } else {
      console.log("Run in browser");
    }
  }
}
