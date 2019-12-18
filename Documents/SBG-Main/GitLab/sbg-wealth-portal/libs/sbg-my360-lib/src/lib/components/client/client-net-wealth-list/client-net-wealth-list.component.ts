import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { GoAction } from '@sbg/common';

import { AdvisorClient } from '@sbg/common';
import { Product } from '@sbg/common';

import { applicationReducer } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { ClientService } from '@sbg/common';

@Component({
  selector: 'client-net-wealth-list',
  templateUrl: 'client-net-wealth-list.component.html',
  styleUrls: ['client-net-wealth-list.component.scss']
})
export class ClientNetWealthListComponent implements OnInit, OnDestroy {
  @Input() model: Observable<Product[]>;
  @Input() name: string;
  @Input() type: string;

  selectedClient: Observable<AdvisorClient>;
  firstName: string;
  lastName: string;
  searchText: string;

  subscriptions = new Subscription();

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>,
    public clientService: ClientService
  ) {}

  ngOnInit() {
    this.selectedClient = this.clientService.getSelectedClient();

    this.subscriptions.add(
      this.selectedClient.subscribe((selectedClient: AdvisorClient) => {
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
      })
    );
  }

  productSelected(product: Product) {
    localStorage.removeItem('client-selected-productid');
    localStorage.setItem('client-selected-productid', product.productId);

    let selectedType = this.name;
    let originatingDomain =
      location.href.indexOf('assetallocation') > -1
        ? 'assetallocation'
        : 'netwealth';
    this.store.dispatch(
      new GoAction({
        path: [
          `advisor/${originatingDomain}/combined/typelist/combined/${selectedType}/typedetail/${product.productId}`
        ]
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
