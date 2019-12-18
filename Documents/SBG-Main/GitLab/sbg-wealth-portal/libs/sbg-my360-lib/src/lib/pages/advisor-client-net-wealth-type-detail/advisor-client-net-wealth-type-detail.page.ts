import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { productActions } from '@sbg/common';

import { AdvisorDetailsData, AdvisorClient } from '@sbg/common';
import { AssetAllocationDetail } from '@sbg/common';
import {
  FetchProductDetailsResponse,
  GrowthData,
  ProductList,
  Product,
  FetchProductsResponse
} from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { loadingReducer } from '@sbg/common';
import { productReducer } from '@sbg/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'advisor-client-net-wealth-type-detail',
  templateUrl: 'advisor-client-net-wealth-type-detail.page.html',
  styleUrls: ['advisor-client-net-wealth-type-detail.page.scss']
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorClientNetWealthTypeDetailPage
  implements OnInit, OnDestroy, AfterViewInit {
  productDetail$: Observable<FetchProductDetailsResponse>;
  productList$: Observable<ProductList>;
  assetAllocation$: Observable<AssetAllocationDetail>;
  growthGraphData$: Observable<GrowthData>;
  growthDropdownData$: Observable<string[]>;
  products$: Observable<FetchProductsResponse>;
  loading$: Observable<boolean>;
  advisorDetailsData$: Observable<AdvisorDetailsData>;
  selectedGrowthGraphDropdownOption$: Observable<string>;
  selectedClient$: Observable<AdvisorClient>;

  isProtection: boolean;
  isLiability: boolean;
  currencyCode: string;
  advisorBpId: string;
  advisorId: string;
  institutionName: string;
  productId: string;

  windowWidth: number = window.innerWidth;

  activatedRouteSubscription: Subscription;
  advisorDetailsSubscription: Subscription;
  assetAllocationSubscription: Subscription;
  productDetailSubscription: Subscription;

  constructor(
    public store: Store<applicationReducer.State>,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(loadingReducer.getLoading));

    this.bindData();

    this.advisorDetailsData$ = this.store.pipe(
      select(advisorReducer.getAdvisorDetails)
    );

    this.advisorDetailsSubscription = this.advisorDetailsData$.subscribe(
      (advisorDetails: AdvisorDetailsData) => {
        if (advisorDetails) {
          this.advisorBpId = advisorDetails.bpid;
          this.advisorId = advisorDetails.idNumber;
          this.requestData();
          this.bindData();
        }
      }
    );

    this.productDetail$ = this.store.pipe(
      select(productReducer.getProductDetailsState)
    );

    this.selectedGrowthGraphDropdownOption$ = this.store.pipe(
      select(
        productReducer.getProductDetailsGrowthGraphSelectedDropdownOptionState
      )
    );

    this.productDetailSubscription = this.productDetail$.subscribe(
      (productDetail: FetchProductDetailsResponse) => {
        if (productDetail) {
          this.currencyCode = productDetail.currencyCode;
          this.bindData();
        }
      }
    );

    this.assetAllocation$ = this.store.pipe(
      select(productReducer.getProductDetailsAssetAllocationState)
    );

    this.assetAllocationSubscription = this.assetAllocation$.subscribe(
      (assetAllocationDetail: AssetAllocationDetail) => {
        if (assetAllocationDetail) {
          this.bindData();
        }
      }
    );
  }

  requestData() {
    this.productId = localStorage.getItem('client-selected-productid');
    let clientBpid: string = localStorage.getItem('client-bpid');
    let clientId: string = localStorage.getItem('client-id');
    let payload = {
      currency: 'ZAR',
      productId: this.productId,
      advisorBpId: this.advisorBpId,
      advisorId: this.advisorId || '',
      customerBpId: clientBpid,
      customerId: clientId || ''
    };

    this.store.dispatch(new productActions.FetchProductDetailsAction(payload));
  }

  bindData() {
    this.selectedClient$ = this.store.pipe(
      select(advisorReducer.getSelectedClient)
    );
    this.products$ = this.store.pipe(
      select(productReducer.getFetchProductsState)
    );
    this.productList$ = this.store.pipe(
      select(productReducer.getProductListState)
    );
    this.growthDropdownData$ = this.store.pipe(
      select(productReducer.getProductDetailsGrowthGraphDropdownDataState)
    );

    this.productList$ = this.store.pipe(
      select(productReducer.getProductListState)
    );

    this.growthDropdownData$ = this.store.pipe(
      select(productReducer.getProductDetailsGrowthGraphDropdownDataState)
    );

    this.growthGraphData$ = this.store.pipe(
      select(productReducer.getProductDetailsGrowthGraphDataState)
    );

    this.productList$.subscribe((productList: ProductList) => {
      if (productList && productList.products) {
        productList.products.forEach((product: Product) => {
          if (this.productId === product.productId) {
            this.institutionName = product.institutionName.toLowerCase();
          }
        });
      }
    });

    this.products$.subscribe((products: FetchProductsResponse) => {
      if (products && products.groupProducts) {
        products.groupProducts.forEach((product: Product) => {
          if (this.productId === product.productId) {
            this.institutionName = product.institutionName.toLowerCase();
          }
        });
      }

      if (products && products.thirdPartyProducts) {
        products.thirdPartyProducts.forEach((product: Product) => {
          if (this.productId === product.productId) {
            this.institutionName = product.institutionName.toLowerCase();
          }
        });
      }
    });

    this.activatedRouteSubscription = this.route.params.subscribe(
      (params: Params) => {
        if (
          params['type1'] === 'Protection' ||
          (params['type3'] && params['type3'] === 'Protection')
        ) {
          this.isProtection = true;
        } else {
          this.isProtection = false;
        }

        if (
          params['type1'] === 'Liability' ||
          (params['type3'] && params['type3'] === 'Liabilities')
        ) {
          this.isLiability = true;
        } else {
          this.isLiability = false;
        }
      }
    );
  }

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  resize(event: object) {
    this.windowWidth = window.innerWidth;
  }

  ngOnDestroy() {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }

    if (this.advisorDetailsSubscription) {
      this.advisorDetailsSubscription.unsubscribe();
    }

    if (this.assetAllocationSubscription) {
      this.assetAllocationSubscription.unsubscribe();
    }

    if (this.productDetailSubscription) {
      this.productDetailSubscription.unsubscribe();
    }
  }
}
