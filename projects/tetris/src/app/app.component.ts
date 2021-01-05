import { Component, OnInit } from "@angular/core";
import {
  CapacitorStorageService,
  ElectronService,
  PlatformService,
} from "@shared-lib";

import * as AppConfig from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "tetris";
  constructor(
    private platform: PlatformService,
    private electronService: ElectronService,
    private capStorageService: CapacitorStorageService
  ) {
    this.localStorageSet("highscore", 2);
  }

  async ngOnInit() {
    if (this.platform.isElectron) {
      console.log("Run in electron");
      // console.log(process.env);
      console.log("Electron ipcRenderer", this.electronService.ipcRenderer);
      console.log("NodeJS childProcess", this.electronService.childProcess);
      const hs = await this.localStorageGet("highscore");
      console.info("hs is: ", hs);
    } else if (this.platform.isNative) {
      console.log("Run in native");
      const hs = await this.localStorageGet("highscore");
      console.info("hs is: ", hs);
    } else {
      console.log("Run in browser");
      const hs = await this.localStorageGet("highscore");
      console.info("hs is: ", hs);
    }
  }

  async localStorageGet(key: string): Promise<any> {
    if (this.platform.isElectron) {
      (window as Window).localStorage.getItem(key);
    }

    return await this.capStorageService.get(key);
  }

  localStorageSet(key: string, value: any): void {
    if (this.platform.isElectron) {
      (window as Window).localStorage.setItem(key, value);
    }

    this.capStorageService.set(key, value);
  }
}
