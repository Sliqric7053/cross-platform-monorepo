import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as momentNs from 'moment';
const moment = momentNs;
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { productActions } from '@sbg/common';
import { profileActions } from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { errorReducer } from '@sbg/common';
import { loadingReducer } from '@sbg/common';
import { productReducer } from '@sbg/common';
import { profileReducer } from '@sbg/common';

import {
  AssetAllocationDetail,
  NetWealthDetail,
  FetchProfileSummaryRequest
} from '@sbg/common';
import { FetchProductsResponse, Product } from '@sbg/common';
import { AdvisorClient, AdvisorDetailsData } from '@sbg/common';
import { ErrorData } from '@sbg/common';
import { GoAction } from '@sbg/common';
import { FormattingService } from '@sbg/common';
import { StyleService } from '@sbg/common';

@Component({
  selector: 'advisor-client-dashboard',
  templateUrl: 'advisor-client-dashboard.page.html',
  styleUrls: ['advisor-client-dashboard.page.scss']
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorClientDashboardPage implements OnInit, OnDestroy {
  model: Observable<NetWealthDetail>;

  profileSummary$: Observable<profileReducer.State>;
  assetAllocationCombinedSummary$: Observable<AssetAllocationDetail>;
  netWealthCombinedSummary$: Observable<NetWealthDetail>;
  lastUpdatedDateTime$: Observable<number>;
  loading$: Observable<boolean>;
  isProductsLoading$: Observable<boolean>;
  products$: Observable<FetchProductsResponse>;
  groupProducts$: Observable<Product[]>;
  thirdPartyProducts$: Observable<Product[]>;
  unmanagedProducts$: Observable<Product[]>;
  selectedClient$: Observable<AdvisorClient>;
  advisorDetailsData$: Observable<AdvisorDetailsData>;
  allErrors$: Observable<ErrorData[]>;
  graphConfig: Object;
  totalValue: string;

  hasProducts = true;
  hasNetWealth = true;
  hasProfileSummaryErrorLength = 0;
  hasProductsErrorLength = 0;
  hasProfileSummaryError = false;
  hasProductsError = false;
  hasAssetAllocation = true;
  isClientEnabled = true;
  dateTime: string;
  clientFirstName: string;
  userLastLogin: string;

  advisorBpId;
  advisorId;

  subscriptions = new Subscription();

  hasSeedAnalytics = false;

  constructor(
    public store: Store<applicationReducer.State>,
    public formatting: FormattingService,
    public palette: StyleService,
    public formattingService: FormattingService
  ) {
    let colours = palette.getPalette();

    this.graphConfig = {
      chart: {
        type: 'line',
        height: 200,
        backgroundColor: 'transparent',
        color: colours.whiteColor
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          style: {
            color: colours.whiteColor
          },
          enabled: true,
          formatter: function() {
            return '';
          }
        },
        tickColor: 'transparent',
        tickInterval: 1,
        minPadding: 0,
        maxPadding: 0,
        startOnTick: true,
        endOnTick: true
      },
      yAxis: {
        gridLineColor: '#0033aa', // whats the #hex?
        title: {
          text: null
        },
        labels: {
          style: {
            color: colours.whiteColor
          },
          formatter: function() {
            return this.value;
          }
        }
      },
      tooltip: {
        backgroundColor: colours.whiteColor,
        crosshairs: true,
        style: {
          color: colours.fontDarkColor
        },
        borderColor: colours.fontDarkColor,
        borderRadius: 6,
        borderWidth: 1,
        shape: 'square',
        shadow: false,
        formatter: function() {
          return '';
        }
      },

      plotOptions: {
        series: {
          color: colours.whiteColor,
          marker: {
            enabled: false
          }
        },
        area: {
          lineColor: colours.whiteColor,
          lineWidth: 2,
          marker: {
            lineWidth: 1,
            lineColor: colours.whiteColor
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [
        {
          data: []
        }
      ]
    };
  }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(loadingReducer.getLoading));

    this.isProductsLoading$ = this.store.pipe(
      select(loadingReducer.getIsProductsLoading)
    );

    this.advisorDetailsData$ = this.store.pipe(
      select(advisorReducer.getAdvisorDetails)
    );

    this.model = this.store.pipe(
      select(profileReducer.getNetWealthCombinedSummary)
    );
    this.model.subscribe(netWealthDetail => {
      this.totalValue = this.formatting.formatCurrency(
        netWealthDetail.totalValue
      );
    });

    this.subscriptions.add(
      this.advisorDetailsData$
        .filter(Boolean)
        .subscribe((advisorDetails: AdvisorDetailsData) => {
          if (advisorDetails && this.isClientEnabled) {
            let clientBpid: string = localStorage.getItem('client-bpid');
            let clientId: string = localStorage.getItem('client-id');

            this.advisorId = advisorDetails.idNumber;
            this.advisorBpId = advisorDetails.bpid;

            let payload = {
              advisorBpId: advisorDetails.bpid,
              advisorId: advisorDetails.idNumber || '',
              customerBpId: clientBpid,
              customerId: clientId || ''
            };

            const request: FetchProfileSummaryRequest = {
              currency: 'ZAR',
              advisorBpId: advisorDetails.bpid || '',
              advisorId: advisorDetails.idNumber || '',
              customerBpId: clientBpid,
              customerId: clientId || '',
              view: ''
            };

            this.store.dispatch(
              new productActions.FetchProductsAction(payload)
            );

            this.bindData();
          }
        })
    );

    this.bindData();
  }

  bindData() {
    this.selectedClient$ = this.store.pipe(
      select(advisorReducer.getSelectedClient)
    );

    this.subscriptions.add(
      this.selectedClient$.subscribe((client: AdvisorClient) => {
        if (client) {
          this.clientFirstName = this.formattingService.toTitleCase(
            client.firstName
          );

          if (!client.enabled) {
            this.isClientEnabled = false;
          }
        }
      })
    );

    this.profileSummary$ = this.store.pipe(
      select(profileReducer.getProfileState)
    );

    this.subscriptions.add(
      this.profileSummary$.subscribe((summary: profileReducer.State) => {
        if (summary && JSON.stringify(summary.profileSummary) !== '{}') {
          this.hasNetWealth = true;
          this.hasAssetAllocation = true;
        } else {
          this.hasNetWealth = false;
          this.hasAssetAllocation = false;
        }
      })
    );

    this.netWealthCombinedSummary$ = this.store.pipe(
      select(profileReducer.getNetWealthCombinedSummary)
    );

    this.assetAllocationCombinedSummary$ = this.store.pipe(
      select(profileReducer.getAssetAllocationCombinedSummary)
    );

    this.lastUpdatedDateTime$ = this.store.pipe(
      select(profileReducer.getProfileSummaryLastUpdatedDateTime)
    );

    this.subscriptions.add(
      this.lastUpdatedDateTime$.subscribe((dateTime: number) => {
        if (dateTime) {
          this.dateTime =
            moment(dateTime).format('DD MMM YYYY') +
            ' at ' +
            moment(dateTime).format('HH:mm');
        }
      })
    );

    this.products$ = this.store.pipe(
      select(productReducer.getFetchProductsState)
    );

    this.groupProducts$ = this.store.pipe(
      select(productReducer.getGroupProductsState)
    );

    this.thirdPartyProducts$ = this.store.pipe(
      select(productReducer.getThirdPartyProductsState)
    );

    this.unmanagedProducts$ = this.store.pipe(
      select(productReducer.getUnmanagedState)
    );

    this.subscriptions.add(
      this.products$.subscribe((products: FetchProductsResponse) => {
        if (products && JSON.stringify(products) !== '{}') {
          this.hasProducts = true;
        } else {
          this.hasProducts = false;
        }

        this.userLastLogin =
          this.clientFirstName +
          "'s last login: " +
          moment(products.userLastLogin).format('DD MMM YYYY') +
          ' at ' +
          moment(products.userLastLogin).format('HH:mm');
      })
    );

    this.allErrors$ = this.store.pipe(select(errorReducer.getAllErrors));

    this.subscriptions.add(
      this.allErrors$.subscribe((errors: ErrorData[]) => {
        this.hasProfileSummaryErrorLength = 0;
        this.hasProductsErrorLength = 0;
        this.hasProfileSummaryError = false;
        this.hasProductsError = false;

        errors.forEach((error: ErrorData) => {
          if (error && error.url) {
            if (error.url.indexOf('FetchProfileSummary') !== -1) {
              this.hasProfileSummaryErrorLength++;
            }

            if (error.url.indexOf('FetchProducts') !== -1) {
              this.hasProductsErrorLength++;
            }
          }
        });

        if (this.hasProfileSummaryErrorLength > 0) {
          this.hasProfileSummaryError = true;
        } else {
          this.hasProfileSummaryError = false;
        }

        if (this.hasProductsErrorLength > 0) {
          this.hasProductsError = true;
        } else {
          this.hasProductsError = false;
        }
      })
    );
  }

  netWealthTileSelected() {
    this.store.dispatch(new GoAction({ path: ['advisor/netwealth'] }));
  }

  assetAllocationTileSelected() {
    this.store.dispatch(new GoAction({ path: ['advisor/assetallocation'] }));
  }

  linkedAccountsTileSelected() {
    this.store.dispatch(new GoAction({ path: ['advisor/linkedaccounts'] }));
  }

  profileSummaryErrorTileSelected() {
    let clientBpid: string = localStorage.getItem('client-bpid');
    let clientId: string = localStorage.getItem('client-id');

    const request: FetchProfileSummaryRequest = {
      currency: 'ZAR',
      advisorBpId: this.advisorBpId,
      advisorId: this.advisorId || '',
      customerBpId: clientBpid,
      customerId: clientId || '',
      view: ''
    };

    this.store.dispatch(new profileActions.FetchProfileSummaryAction(request));
  }

  productListErrorTileSelected() {
    let clientBpid: string = localStorage.getItem('client-bpid');
    let clientId: string = localStorage.getItem('client-id');

    let payload = {
      advisorBpId: this.advisorBpId,
      advisorId: this.advisorId || '',
      customerBpId: clientBpid,
      customerId: clientId || ''
    };

    this.store.dispatch(new productActions.FetchProductsAction(payload));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
