import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { AdvisorDetailsData, AdvisorClient } from '@sbg/common';
import {
  InvestmentType,
  NetWealthDetail,
  NetWealth,
  FetchProfileSummaryRequest
} from '@sbg/common';

import { GoAction } from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { loadingReducer } from '@sbg/common';
import { profileReducer } from '@sbg/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'advisor-client-net-wealth',
  templateUrl: 'advisor-client-net-wealth.page.html',
  styleUrls: ['advisor-client-net-wealth.page.scss']
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorClientNetWealthPage implements OnInit, OnDestroy {
  loading$: Observable<boolean>;

  advisorDetailsData$: Observable<AdvisorDetailsData>;

  netWealthCombinedSummary$: Observable<NetWealthDetail>;
  netWealthCombinedTypes$: Observable<InvestmentType[]>;

  netWealthOnshoreSummary$: Observable<NetWealthDetail>;
  netWealthOnshoreTypes$: Observable<InvestmentType[]>;

  netWealthOffshoreSummary$: Observable<NetWealthDetail>;
  netWealthOffshoreTypes$: Observable<InvestmentType[]>;

  netWealth$: Observable<NetWealth>;

  selectedClient$: Observable<AdvisorClient>;

  activeIndex: number;

  activatedRouteSubscription: Subscription;
  advisorDetailsSubscription: Subscription;
  netWealthSubscription: Subscription;

  constructor(
    public store: Store<applicationReducer.State>,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRouteSubscription = this.route.params.subscribe(
      (params: Params) => {
        switch (params['type1']) {
          case 'combined':
            this.activeIndex = 0;
            break;
          case 'onshore':
            this.activeIndex = 1;
            break;
          case 'offshore':
            this.activeIndex = 2;
            break;
        }
      }
    );

    this.loading$ = this.store.pipe(select(loadingReducer.getLoading));

    this.bindData();

    this.advisorDetailsData$ = this.store.pipe(
      select(advisorReducer.getAdvisorDetails)
    );

    this.advisorDetailsSubscription = this.advisorDetailsData$.subscribe(
      (advisorDetails: AdvisorDetailsData) => {
        if (advisorDetails) {
          let clientBpid: string = localStorage.getItem('client-bpid');
          let clientId: string = localStorage.getItem('client-id');

          const request: FetchProfileSummaryRequest = {
            currency: 'ZAR',
            advisorBpId: advisorDetails.bpid,
            advisorId: advisorDetails.idNumber || '',
            customerBpId: clientBpid,
            customerId: clientId || '',
            view: ''
          };

          this.bindData();
        }
      }
    );
    this.netWealth$ = this.store.pipe(select(profileReducer.getNetWealth));

    this.netWealthSubscription = this.netWealth$.subscribe(
      (netWealth: NetWealth) => {
        if (netWealth) {
          this.bindData();
        }
      }
    );
  }

  bindData() {
    this.selectedClient$ = this.store.pipe(
      select(advisorReducer.getSelectedClient)
    );

    this.netWealthCombinedSummary$ = this.store.pipe(
      select(profileReducer.getNetWealthCombinedSummary)
    );

    this.netWealthCombinedTypes$ = this.store.pipe(
      select(profileReducer.getNetWealthCombinedTypes)
    );

    this.netWealthOnshoreSummary$ = this.store.pipe(
      select(profileReducer.getNetWealthOnshoreSummary)
    );

    this.netWealthOnshoreTypes$ = this.store.pipe(
      select(profileReducer.getNetWealthOnshoreTypes)
    );

    this.netWealthOffshoreSummary$ = this.store.pipe(
      select(profileReducer.getNetWealthOffshoreSummary)
    );

    this.netWealthOffshoreTypes$ = this.store.pipe(
      select(profileReducer.getNetWealthOffshoreTypes)
    );
  }

  tabChanged({ index }) {
    switch (index) {
      case 0:
        this.store.dispatch(
          new GoAction({ path: ['advisor/netwealth/combined'] })
        );
        break;
      case 1:
        this.store.dispatch(
          new GoAction({ path: ['advisor/netwealth/onshore'] })
        );
        break;
      case 2:
        this.store.dispatch(
          new GoAction({ path: ['advisor/netwealth/offshore'] })
        );
        break;
    }
  }

  ngOnDestroy() {}
}
