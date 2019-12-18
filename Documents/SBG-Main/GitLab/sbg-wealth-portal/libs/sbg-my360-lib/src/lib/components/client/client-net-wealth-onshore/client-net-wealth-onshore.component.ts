import {
  Component,
  HostListener,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { GoAction } from '@sbg/common';

import { applicationReducer } from '@sbg/common';

import { AdvisorClient, AdvisorDetailsData } from '@sbg/common';
import { NetWealthDetail, InvestmentType, TotalGraph } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { AdvisorService } from '@sbg/common';
import { ClientService } from '@sbg/common';
import {
  onshoreGraphColor,
  onshoreGraphConfig,
  onshoreGaugeConfig
} from '../../graph-configs/net-wealth-onshore';

@Component({
  selector: 'client-net-wealth-onshore',
  templateUrl: 'client-net-wealth-onshore.component.html',
  styleUrls: ['client-net-wealth-onshore.component.scss']
})
export class ClientNetWealthOnshoreComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() model: Observable<NetWealthDetail>;
  @Input() types: Observable<InvestmentType[]>;
  totalValue: string;
  assetsValue: string;
  liabilitiesValue: string;

  windowWidth: number = window.innerWidth;

  totalGraphModel: Observable<TotalGraph>;

  loggedInAdvisor: Observable<AdvisorDetailsData>;
  loggedInAdvisorBpId: string;
  loggedInAdvisorId: string;
  selectedClient: Observable<AdvisorClient>;
  firstName: string;
  lastName: string;
  graphConfig: Object;
  gaugeConfig: Object;
  graphColor: string;

  subscriptions = new Subscription();

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>,
    public advisorService: AdvisorService,
    public clientService: ClientService
  ) {
    this.graphColor = onshoreGraphColor();
    this.graphConfig = onshoreGraphConfig();
    this.gaugeConfig = onshoreGaugeConfig();
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

    this.subscriptions.add(
      this.model.subscribe((netWealthDetail: NetWealthDetail) => {
        this.totalValue = this.formatting.formatCurrency(
          netWealthDetail.totalValue
        );
        this.assetsValue = this.formatting.formatCurrency(
          netWealthDetail.assetsValue
        );
        this.liabilitiesValue = this.formatting.formatCurrency(
          netWealthDetail.liabilitiesValue
        );
      })
    );

    this.totalGraphModel = this.model
      .filter((netWealthDetail: NetWealthDetail) => {
        return netWealthDetail !== null && netWealthDetail !== undefined;
      })
      .map((netWealthDetail: NetWealthDetail) => {
        return {
          context: 'netWealth-detail',
          seriesPointOne: netWealthDetail.assetsValue,
          seriesPointTwo: netWealthDetail.liabilitiesValue
        };
      });
  }

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  resize(event: object) {
    this.windowWidth = window.innerWidth;
  }

  typeSelected(name: string) {
    this.store.dispatch(
      new GoAction({
        path: [`advisor/netwealth/onshore/typelist/onshore/${name}`]
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
