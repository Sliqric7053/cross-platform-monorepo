import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { AdvisorDetailsData, AdvisorClient } from '@sbg/common';
import { Product } from '@sbg/common';

import { GoAction } from '@sbg/common';
import { productActions } from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { loadingReducer } from '@sbg/common';
import { productReducer } from '@sbg/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'advisor-client-net-wealth-type-list',
  templateUrl: 'advisor-client-net-wealth-type-list.page.html',
  styleUrls: ['advisor-client-net-wealth-type-list.page.scss']
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorClientNetWealthTypeListPage implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  combinedProducts$: Observable<Product[]>;
  offshoreProducts$: Observable<Product[]>;
  onshoreProducts$: Observable<Product[]>;
  advisorDetails$: Observable<AdvisorDetailsData>;
  productList$: Observable<Product[]>;
  selectedClient$: Observable<AdvisorClient>;

  loggedInAdvisorBpId: string;
  loggedInAdvisorId: string;
  activeIndex: number;
  productName: string = '';
  netWealthSelectedTab: string;

  activatedRouteSubscription: Subscription;
  advisorDetailsSubscription: Subscription;
  productListSubscription: Subscription;

  constructor(
    public store: Store<applicationReducer.State>,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.activatedRouteSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.netWealthSelectedTab = params['type1'];
        this.productName = params['type3'];

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
          default:
            this.activeIndex = 0;
            break;
        }
      }
    );

    this.loading$ = this.store.pipe(select(loadingReducer.getLoading));

    this.bindData();

    this.advisorDetails$ = this.store.pipe(
      select(advisorReducer.getAdvisorDetails)
    );

    this.advisorDetailsSubscription = this.advisorDetails$.subscribe(
      (advisorDetails: AdvisorDetailsData) => {
        if (advisorDetails) {
          this.loggedInAdvisorBpId = advisorDetails.bpid;
          this.loggedInAdvisorId = advisorDetails.idNumber;

          this.requestData();
          this.bindData();
        }
      }
    );

    this.productList$ = this.store.pipe(
      select(productReducer.getProductListProductsState)
    );

    this.productListSubscription = this.productList$.subscribe(
      (productList: Product[]) => {
        if (productList) {
          this.bindData();
        }
      }
    );
  }

  requestData() {
    let clientBpid: string = localStorage.getItem('client-bpid');
    let clientId: string = localStorage.getItem('client-id');

    let productListParameters = {
      currency: 'ZAR',
      view: this.productName,
      advisorBpId: this.loggedInAdvisorBpId || '',
      advisorId: this.loggedInAdvisorId || '',
      customerBpId: clientBpid,
      customerId: clientId || ''
    };

    this.store.dispatch(
      new productActions.FetchProductListAction(productListParameters)
    );
  }

  bindData() {
    this.selectedClient$ = this.store.pipe(
      select(advisorReducer.getSelectedClient)
    );
    this.combinedProducts$ = this.store.pipe(
      select(productReducer.getCombinedProductsFromProductListState)
    );

    this.offshoreProducts$ = this.store.pipe(
      select(productReducer.getOffShoreProductsFromProductListState)
    );

    this.onshoreProducts$ = this.store.pipe(
      select(productReducer.getOnShoreProductsFromProductListState)
    );
  }

  tabChanged({ index }) {
    let context = 'netwealth';

    if (this.router.url.indexOf('assetallocation') !== -1) {
      context = 'assetallocation';
    }

    switch (index) {
      case 0:
        this.store.dispatch(
          new GoAction({
            path: [
              `advisor/${context}/${this.netWealthSelectedTab}/typelist/combined/${this.productName}`
            ]
          })
        );
        break;
      case 1:
        this.store.dispatch(
          new GoAction({
            path: [
              `advisor/${context}/${this.netWealthSelectedTab}/typelist/onshore/${this.productName}`
            ]
          })
        );
        break;
      case 2:
        this.store.dispatch(
          new GoAction({
            path: [
              `advisor/${context}/${this.netWealthSelectedTab}/typelist/offshore/${this.productName}`
            ]
          })
        );
        break;
    }
  }

  ngOnDestroy() {}
}
