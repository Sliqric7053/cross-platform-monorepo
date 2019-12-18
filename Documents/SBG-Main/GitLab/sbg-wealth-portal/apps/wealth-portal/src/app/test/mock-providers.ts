import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {
  SystemSettings,
  EnvironmentSettings,
  AppSettings,
  ISettingsService
} from '@sbg/common';
import { MockData } from './mock-data';

/**
 * @class MockTranslateService, mock service for translating
 */
@Injectable()
export class MockTranslateService {
  public setDefaultLang() {}

  public use() {}

  public instant() {
    return 'Translated';
  }
}

/**
 * @class MockSettingsService, mock service for settings, returns const values
 */
@Injectable()
export class MockSettingsService implements ISettingsService {
  public mockData: MockData;
  public _systemSettings: SystemSettings;
  public _config: EnvironmentSettings;

  constructor() {
    this.mockData = new MockData();
    this._systemSettings = this.mockData.getSystemSettings();
    this._config = this.mockData.getEnvironmentSettings();
  }

  load(): Promise<boolean> {
    return new Promise(resolve => resolve(true));
  }

  load$(): Observable<AppSettings> {
    return of({
      system: this._systemSettings,
      enviroment: this._config
    });
  }

  systemSettings(): SystemSettings {
    return this._systemSettings;
  }

  environmentSettings(): EnvironmentSettings {
    return this._config;
  }
}

/**
 * @const mockReducer, a mock reducer that returns state unchanged
 */
export const mockReducer = (state: any = null): any => {
  return state;
};
