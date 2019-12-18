import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AdvisorClient, AdvisorDetailsData } from '@sbg/common';
import { AssetAllocationDetail, InvestmentType } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { AdvisorService } from '@sbg/common';
import { ClientService } from '@sbg/common';
import { ProductService } from '@sbg/common';
import { assetAllocationCombinedGraphConfig } from '../../graph-configs/asset-allocation-combined';

@Component({
  selector: 'client-asset-allocation-combined',
  templateUrl: 'client-asset-allocation-combined.component.html',
  styleUrls: ['client-asset-allocation-combined.component.scss']
})
export class ClientAssetAllocationCombinedComponent
  implements OnInit, OnDestroy {
  @Input() model: Observable<AssetAllocationDetail>;
  @Input() types: Observable<InvestmentType[]>;

  subscriptions = new Subscription();

  loggedInAdvisor: Observable<AdvisorDetailsData>;
  loggedInAdvisorBpId: string;
  loggedInAdvisorId: string;
  selectedClient: Observable<AdvisorClient>;
  firstName: string;
  lastName: string;
  graphConfig: Object;
  context = 'Asset allocation combined';

  constructor(
    public formatting: FormattingService,
    public advisorService: AdvisorService,
    public clientService: ClientService,
    public productService: ProductService
  ) {
    this.graphConfig = assetAllocationCombinedGraphConfig();
  }

  ngOnInit() {
    this.loggedInAdvisor = this.advisorService.getLoggedInAdvisor();
    this.selectedClient = this.clientService.getSelectedClient();

    this.subscriptions.add(
      this.loggedInAdvisor.subscribe((loggedInAdvisor: AdvisorDetailsData) => {
        if (loggedInAdvisor) {
          this.loggedInAdvisorBpId = loggedInAdvisor.bpid;
          this.loggedInAdvisorId = loggedInAdvisor.idNumber;
        }
      })
    );

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

  typeSelected(name: string) {
    this.productService.goToProduct(name);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
