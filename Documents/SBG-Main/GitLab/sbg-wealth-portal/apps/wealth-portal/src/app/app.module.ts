import { SbgTableModule, SbgIconModule } from '@sbg/components';
import { FormattingService } from '@sbg/common';
import { UtilitiesModule } from '@sbg/common';
import {
  StoreModule,
  ActionReducerMap,
  ActionReducer,
  Store
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ApplicationRef,
  InjectionToken,
  Injectable,
  APP_INITIALIZER,
  ErrorHandler
} from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIFrameworkModule } from '@sbg/common';
import { ServiceFrameworkModule } from '@sbg/common';
import { NgIdleModule } from '@ng-idle/core';
import { routing, appRoutingProviders } from './app.routing';

import { UnauthorizedPage } from './pages/base/unauthorized/unauthorized.page';
import { NotFoundPage } from './pages/base/not-found/not-found.page';
import { AppPageComponent } from './pages/app.page';
import { GoalSetterUIModule } from '@sbg/goal-setter';
import { AdvisorUIModule } from '@sbg-wealth-portal/sbg-my360-lib';
import { GrowMyMoneyModule } from '@sbg/grow-my-money';
import { ChartModule } from 'angular-highcharts';
import { HighchartsStatic } from 'sbg-angular2-highcharts/dist/HighchartsService';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SettingsService } from '@sbg/common';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthService } from '@sbg/common';
import { AuthGuard } from '@sbg/common';
import { GlobalErrorHandler } from '@sbg/common';

import { applicationReducer } from '@sbg/common';
import { ReactiveModule } from '@sbg/common';
import { CookieService } from 'ngx-cookie-service';
import * as fromRoot from './app.reducers';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../environments/environment';
import {
  createNewHosts,
  createInputTransfer,
  removeNgStyles
} from '@angularclass/hmr';

import { GoalSetterUtilitiesModule } from '@sbg/goal-setter';
import { AngularMaterialModule } from './angular-material.module';
import { DlisPageComponent } from './pages/third-party/dlis/dlis.page.component';
import { EliteWealthPageComponent } from './pages/third-party/elite-wealth/elite-wealth.page.component';
import { of, Observable } from 'rxjs';

export const reducerToken = new InjectionToken<
  ActionReducerMap<applicationReducer.State>
>('Registered Reducers');

export const reducerProvider = [
  { provide: reducerToken, useValue: applicationReducer.reducer }
];

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

export function translateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const json = require('../assets/i18n/en.json');

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(json);
  }
}

@Injectable()
export class VersionHtmlRequestService {
  constructor(public http: HttpClient) {}

  load(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.http.get('version.html').subscribe(
        res => {
          resolve(true);
        },
        error => {
          resolve(true);
        }
      );
    });
  }
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    CurrencyMaskModule,
    routing,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(fromRoot.reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: environment.production // Restrict extension to log-only mode
        })
      : [],
    HttpClientModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatRadioModule,
    MatInputModule,
    UIFrameworkModule,
    GoalSetterUIModule,
    AdvisorUIModule,
    GrowMyMoneyModule.forRoot(environment),
    GoalSetterUtilitiesModule,
    UtilitiesModule.forRoot(),
    ReactiveModule,
    SbgTableModule,
    SbgIconModule,
    AngularMaterialModule,
    NgIdleModule.forRoot(),
    ServiceFrameworkModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    })
  ],
  declarations: [
    AppPageComponent,
    NotFoundPage,
    UnauthorizedPage,
    DlisPageComponent,
    EliteWealthPageComponent
  ],
  providers: [
    reducerProvider,
    appRoutingProviders,
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: ErrorHandler,
      useClass: environment.envName == 'e2e' ? ErrorHandler : GlobalErrorHandler
    },
    GrowMyMoneyModule.forRoot(environment).providers,
    CookieService,
    AuthService,
    AuthGuard,
    FormattingService,
    VersionHtmlRequestService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (authTokenService: VersionHtmlRequestService) => () =>
        authTokenService.load().then(loaded => {
          if (
            window.location.href.includes('goalsteps') ||
            window.location.href.includes('client/goals')
          ) {
            window.location.href = `${window.location.origin}/#/goalsetter/client/list`;
          }

          if (window.location.href.includes('advisor/')) {
            window.location.href = `${window.location.origin}/#/advisor`;
          }

          if (window.location.href.includes('grow-my-money/results')) {
            window.location.href = `${window.location.origin}/#/grow-my-money/client-form`;
          }
        }),
      deps: [VersionHtmlRequestService],
      multi: true
    }
  ],
  bootstrap: [],
  entryComponents: [AppPageComponent]
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    public settings: SettingsService,
    public store: Store<fromRoot.State>
  ) {}

  hmrOnInit(store) {
    if (!store || !store.rootState) {
      return;
    }
    if (store.rootState) {
      this.store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      });
    }

    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(
      cmp => cmp.location.nativeElement
    );
    this.store.take(1).subscribe(s => (store.rootState = s));
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

  public ngDoBootstrap() {
    this.appRef.bootstrap(AppPageComponent);
  }
}
