import { Subject } from 'rxjs/Subject';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Router, RoutesRecognized } from '@angular/router';

import { Idle, DEFAULT_INTERRUPTSOURCES, AutoResume } from '@ng-idle/core';

import { applicationReducer } from '@sbg/common';
import { authActions } from '@sbg/common';

import * as HighCharts from 'highcharts';
import * as SolidGauge from 'highcharts/modules/solid-gauge.src';
import { SettingsService } from '@sbg/common';
import { SbgCookieHelper } from '@sbg/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TimeoutComponent } from '@sbg/common';
import { environment } from '../../environments/environment';

import {
  GoalSetterFlow,
  goalSetterNavigationReducer,
  goalSetterClientReducer,
  GoalSetterClientData,
  GoalSetterReviewExitConfirmationComponent,
  goalSetterNavigationActions
} from '@sbg/goal-setter';

import { constants } from '@sbg/common';
import { MatSidenav } from '@angular/material/sidenav';

// tslint:disable-next-line:no-var-keyword
declare var require: any;
const HighChartsMore = require('highcharts/highcharts-more');

HighChartsMore(HighCharts);
SolidGauge(HighCharts);

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sbg-win-app',
  templateUrl: 'app.page.html',
  styleUrls: ['app.page.scss']
})
@AutoUnsubscribe()
export class AppPageComponent implements OnInit, OnDestroy {
  timeoutCount = new Subject<number>();
  showTimeOutWarning: boolean = false;
  dialogRef: MatDialogRef<TimeoutComponent>;
  routerSubscription: Subscription;
  displayBreadcrumb: boolean = true;

  goalSetterFlows = GoalSetterFlow;
  currentFlow$: Observable<GoalSetterFlow>;
  currentFlow: GoalSetterFlow;
  selectedClient$: Observable<any>;

  isEditing = false;
  selectedClientBpId: string;
  showLogin = false;
  loginButtonText = 'SIGN OUT';

  @ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav;

  constructor(
    public store: Store<applicationReducer.State>,
    public idle: Idle,
    public dialog: MatDialog,
    public ngZone: NgZone,
    public settings: SettingsService,
    public translate: TranslateService,
    public sbgCookieHelper: SbgCookieHelper,
    public router: Router
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    if (environment.envName != 'e2e') {
      idle.setIdle(constants.SESSION_TIMEOUT);
      idle.setTimeout(60);
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
      idle.setAutoResume(AutoResume.notIdle);

      idle.onTimeout.subscribe(() => {
        sbgCookieHelper.logoutUser();
      });

      this.routerSubscription = router.events.subscribe(event => {
        if (event instanceof RoutesRecognized) {
          if (event.url.includes('goalsteps')) {
            this.displayBreadcrumb = false;
          } else {
            this.displayBreadcrumb = true;
          }
        }
      });

      idle.onTimeoutWarning.subscribe((countdown: number) => {
        this.timeoutCount.next(countdown);
        if (countdown < 60) {
          if (!this.showTimeOutWarning) {
            this.showTimeOutWarning = true;
            this.dialogRef = this.dialog.open(TimeoutComponent, {
              disableClose: false,
              width: '300px'
            });
            this.dialogRef.afterClosed().subscribe(() => {
              this.showTimeOutWarning = false;
            });
            this.dialogRef.componentInstance.timeoutCounter = this.timeoutCount;
          }
        } else {
          this.showTimeOutWarning = false;
        }
      });

      idle.watch();
    }
  }

  ngOnInit() {
    this.currentFlow$ = this.store.pipe(
      select(goalSetterNavigationReducer.getCurrentFlow)
    );

    this.selectedClient$ = this.store.pipe(
      select(goalSetterClientReducer.getSelectedClient)
    );

    if (!['local', 'e2e'].some(envName => envName == environment.envName)) {
      this.sbgCookieHelper.getTokenExpiryTime();
      this.sbgCookieHelper.startTimer();
      if (!this.sbgCookieHelper.tokenExists()) {
        this.store.dispatch(new authActions.ReIssueTokenAction());
      }
    }

    this.sbgCookieHelper.timeRemaining = 900;

    if (environment.envName == 'local') {
      this.sbgCookieHelper.startTimer();
    }

    this.currentFlow$.subscribe(flow => {
      this.currentFlow = flow;
      this.isEditing = [
        this.goalSetterFlows.Create,
        this.goalSetterFlows.Edit,
        this.goalSetterFlows.Review
      ].some(f => f == flow);
    });

    this.selectedClient$.subscribe((client: GoalSetterClientData) => {
      if (client) {
        this.selectedClientBpId = client.bpId;
      }
    });

    this.showLogin =
      this.loginButtonText &&
      this.loginButtonText.length > 0 &&
      this.currentFlow === this.goalSetterFlows.List;

    this.isEditing = this.currentFlow !== this.goalSetterFlows.List;
  }

  ngOnDestroy() {}

  onLogout() {
    this.store.dispatch(new authActions.LogoutAction());
  }

  handleNavToggle() {
    if (this.currentFlow === this.goalSetterFlows.List) {
      this.sidenav.toggle();
    } else {
      if (this.currentFlow === this.goalSetterFlows.Review) {
        let dialogRef = this.dialog.open(
          GoalSetterReviewExitConfirmationComponent,
          { width: constants.DIALOG_WIDTH_SMALL }
        );
      } else {
        this.store.dispatch(
          new goalSetterNavigationActions.GoalSetterGoBacktoGoalListAction(
            this.selectedClientBpId
          )
        );
      }
    }
  }
}
