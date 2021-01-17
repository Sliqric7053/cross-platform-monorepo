import { Injectable } from "@angular/core";
import { Capacitor } from "@capacitor/core";

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  constructor() {}

  get isElectron(): boolean {
    return !!window?.process?.type;
  }

  get isNative() {
    if (Capacitor.isNative) {
      return true;
    }
  }
}
