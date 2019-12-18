import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvisorUIModule } from '@sbg-wealth-portal/sbg-my360-lib';

import {
  AuthGuard,
  FormattingService,
  SelectedClientService,
  applicationReducer,
  ReactiveModule,
  ApiInterceptor,
  SettingsService,
  SbgCookieHelper,
  AuthService,
  StyleService,
  PdfRenderService
} from '@sbg/common';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import * as fromRoot from './app.reducers';
import { storeLogger } from 'ngrx-store-logger';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Observable, of } from 'rxjs';
import { en } from '../assets/i18n/en';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CookieService } from 'ngx-cookie-service';
import {
  SbgButtonModule,
  SbgHeaderModule,
  SbgIconModule
} from '@sbg/components';
import { HighchartsStatic } from 'sbg-angular2-highcharts/dist/HighchartsService';
import { environment } from '../environments/environment';

// tslint:disable-next-line:no-shadowed-variable
export function ngrxStoreLogger(r: ActionReducer<fromRoot.State>): any {
  return storeLogger()(r);
}

export function stateSetter(r: ActionReducer<any>): ActionReducer<any> {
  return function(state: any, action: any) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return r(state, action);
  };
}

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(en);
  }
}

export const metaReducers = [ngrxStoreLogger, stateSetter];

declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  hc.setOptions({
    chart: {
      style: {
        fontFamily: 'Roboto'
      }
    },
    legend: {
      itemStyle: { font: '12px', color: '#444444' }
    }
  });
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdvisorUIModule,
    ReactiveModule,
    SbgButtonModule,
    SbgHeaderModule,
    SbgIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    StoreModule.forRoot(fromRoot.reducers, { metaReducers }),
    EffectsModule.forRoot([])
  ],
  providers: [
    AuthGuard,
    FormattingService,
    SelectedClientService,
    ApiInterceptor,
    SettingsService,
    SbgCookieHelper,
    CookieService,
    StyleService,
    PdfRenderService,
    AuthService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
