import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { GoAction } from '@sbg/common';

import { AdvisorClient, AdvisorDetailsData } from '@sbg/common';
import { AssetAllocationDetail, InvestmentType } from '@sbg/common';

import { applicationReducer } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { assetAllocationOffshoreGraphConfig } from '../../graph-configs/asset-allocation-offshore';
import { assetAllocationOffshoreGaugeGraphConfig } from '../../graph-configs/asset-allocation-offshore-gauge';
import { AdvisorService } from '@sbg/common';
import { ClientService } from '@sbg/common';

@Component({
  selector: 'client-asset-allocation-offshore',
  templateUrl: 'client-asset-allocation-offshore.component.html',
  styleUrls: ['client-asset-allocation-offshore.component.scss']
})
export class ClientAssetAllocationOffshoreComponent
  implements OnInit, OnDestroy {
  @Input() model: Observable<AssetAllocationDetail>;
  @Input() types: Observable<InvestmentType[]>;

  loggedInAdvisor: Observable<AdvisorDetailsData>;
  loggedInAdvisorBpId: string;
  loggedInAdvisorId: string;
  selectedClient: Observable<AdvisorClient>;
  firstName: string;
  lastName: string;
  graphConfig: Object;
  gaugeConfig: Object;
  graphColor: string = '#b34fc5';

  subscriptions = new Subscription();

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>,
    public advisorService: AdvisorService,
    public clientService: ClientService
  ) {
    this.graphConfig = assetAllocationOffshoreGraphConfig();
    this.gaugeConfig = assetAllocationOffshoreGaugeGraphConfig();
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
    this.store.dispatch(
      new GoAction({
        path: [`advisor/assetallocation/offshore/typelist/offshore/${name}`]
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
