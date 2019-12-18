import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { GoAction } from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { loadingReducer } from '@sbg/common';
import { profileReducer } from '@sbg/common';

import {
  AssetAllocationDetail,
  InvestmentType,
  AssetAllocation,
  FetchProfileSummaryRequest
} from '@sbg/common';
import { AdvisorDetailsData, AdvisorClient } from '@sbg/common';

@Component({
  selector: 'advisor-client-asset-allocation',
  templateUrl: 'advisor-client-asset-allocation.page.html',
  styleUrls: ['advisor-client-asset-allocation.page.scss']
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorClientAssetAllocationPage implements OnInit, OnDestroy {
  assetAllocationCombinedSummary$: Observable<AssetAllocationDetail>;
  assetAllocationCombinedTypes$: Observable<InvestmentType[]>;

  assetAllocationOnshoreSummary$: Observable<AssetAllocationDetail>;
  assetAllocationOnshoreTypes$: Observable<InvestmentType[]>;

  assetAllocationOffshoreSummary$: Observable<AssetAllocationDetail>;
  assetAllocationOffshoreTypes$: Observable<InvestmentType[]>;

  selectedClient$: Observable<AdvisorClient>;

  loading$: Observable<boolean>;

  advisorDetailsData$: Observable<AdvisorDetailsData>;
  assetAllocation$: Observable<AssetAllocation>;

  activatedRouteSubscription: Subscription;
  advisorDetailsSubscription: Subscription;
  assetAllocationSubscription: Subscription;

  activeIndex: number;

  constructor(
    public store: Store<applicationReducer.State>,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeIndex = 0;

    this.loading$ = this.store.pipe(select(loadingReducer.getLoading));

    this.selectedClient$ = this.store.pipe(
      select(advisorReducer.getSelectedClient)
    );

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
        } else {
          this.assetAllocationCombinedSummary$ = this.store.pipe(
            select(profileReducer.getAssetAllocationCombinedSummary)
          );

          this.assetAllocationCombinedTypes$ = this.store.pipe(
            select(profileReducer.getAssetAllocationCombinedTypes)
          );

          this.assetAllocationOnshoreSummary$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOnshoreSummary)
          );

          this.assetAllocationOnshoreTypes$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOnshoreTypes)
          );

          this.assetAllocationOffshoreSummary$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOffshoreSummary)
          );

          this.assetAllocationOffshoreTypes$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOffshoreTypes)
          );
        }
      }
    );

    this.assetAllocation$ = this.store.pipe(
      select(profileReducer.getAssetAllocation)
    );

    this.assetAllocationSubscription = this.assetAllocation$.subscribe(
      (netWealth: AssetAllocation) => {
        if (netWealth) {
          this.assetAllocationCombinedSummary$ = this.store.pipe(
            select(profileReducer.getAssetAllocationCombinedSummary)
          );

          this.assetAllocationCombinedTypes$ = this.store.pipe(
            select(profileReducer.getAssetAllocationCombinedTypes)
          );

          this.assetAllocationOnshoreSummary$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOnshoreSummary)
          );

          this.assetAllocationOnshoreTypes$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOnshoreTypes)
          );

          this.assetAllocationOffshoreSummary$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOffshoreSummary)
          );

          this.assetAllocationOffshoreTypes$ = this.store.pipe(
            select(profileReducer.getAssetAllocationOffshoreTypes)
          );
        }
      }
    );
  }

  tabChanged({ index }) {
    switch (index) {
      case 0:
        this.store.dispatch(
          new GoAction({ path: ['advisor/assetallocation/combined'] })
        );
        break;
      case 1:
        this.store.dispatch(
          new GoAction({ path: ['advisor/assetallocation/onshore'] })
        );
        break;
      case 2:
        this.store.dispatch(
          new GoAction({ path: ['advisor/assetallocation/offshore'] })
        );
        break;
    }
  }

  ngOnDestroy() {}
}
