import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class CapacitorStorageService {
  constructor() {}

  async set(key: string, value: any): Promise<void> {
    await Storage.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  async get(key: string): Promise<any> {
    const item = await Storage.get({ key: key });
    return JSON.parse(item.value);
  }

  async remove(key: string): Promise<void> {
    await Storage.remove({
      key: key,
    });
  }
}
