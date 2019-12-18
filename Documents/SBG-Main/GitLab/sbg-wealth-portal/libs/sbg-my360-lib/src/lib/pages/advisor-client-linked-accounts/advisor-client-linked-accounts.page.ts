import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { productActions } from '@sbg/common';
import { GoAction } from '@sbg/common';

import { AdvisorClient } from '@sbg/common';
import { AdvisorDetailsData } from '@sbg/common';
import { Product } from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { loadingReducer } from '@sbg/common';
import { productReducer } from '@sbg/common';
import { FormattingService } from '@sbg/common';

@Component({
  selector: 'advisor-client-linked-accounts',
  templateUrl: 'advisor-client-linked-accounts.page.html',
  styleUrls: ['advisor-client-linked-accounts.page.scss']
})
@AutoUnsubscribe()
// tslint:disable-next-line:component-class-suffix
export class AdvisorClientLinkedAccountsPage implements OnInit, OnDestroy {
  advisorDetailsData$: Observable<AdvisorDetailsData>;
  groupProducts$: Observable<Product[]>;
  thirdPartyProducts$: Observable<Product[]>;
  unmanagedProducts$: Observable<Product[]>;
  selectedClient$: Observable<AdvisorClient>;
  loading$: Observable<boolean>;

  searchText: string;

  firstName: string;
  lastName: string;
  advisorBpId: string;
  advisorId: string;

  displaySbsaProducts = true;
  displayThirdPartyProducts = true;
  displayUnmanagedProducts = true;

  advisorDetailsSubscription: Subscription;
  selectedClientSubscription: Subscription;

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>
  ) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(
      select(loadingReducer.getIsProductsLoading)
    );

    this.bindData();

    this.selectedClient$ = this.store.pipe(
      select(advisorReducer.getSelectedClient)
    );

    this.selectedClientSubscription = this.selectedClient$.subscribe(
      (selectedClient: AdvisorClient) => {
        if (selectedClient) {
          if (selectedClient.firstName) {
            this.firstName = this.formatting.toTitleCase(
              selectedClient.firstName
            );
          }

          if (selectedClient.lastName) {
            this.lastName = this.formatting.toTitleCase(
              selectedClient.lastName
            );
          }
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

          this.advisorBpId = advisorDetails.bpid;
          this.advisorId = advisorDetails.idNumber;

          const payload = {
            customerId: clientId,
            customerBpId: clientBpid,
            advisorId: advisorDetails.idNumber,
            advisorBpId: advisorDetails.bpid
          };

          this.store.dispatch(new productActions.FetchProductsAction(payload));

          this.bindData();
        }
      }
    );
  }

  bindData() {
    this.groupProducts$ = this.store.pipe(
      select(productReducer.getGroupProductsState)
    );

    this.thirdPartyProducts$ = this.store.pipe(
      select(productReducer.getThirdPartyProductsState)
    );

    this.unmanagedProducts$ = this.store.pipe(
      select(productReducer.getUnmanagedState)
    );

    this.searchText = '';
  }

  productSelected(productId: string, productType: string) {
    localStorage.removeItem('client-selected-productid');
    localStorage.setItem('client-selected-productid', productId);

    this.store.dispatch(
      new GoAction({
        path: [
          `advisor/linkedaccounts/productdetails/${productType}/${productId}`
        ]
      })
    );
  }

  ngOnDestroy() {}
}
