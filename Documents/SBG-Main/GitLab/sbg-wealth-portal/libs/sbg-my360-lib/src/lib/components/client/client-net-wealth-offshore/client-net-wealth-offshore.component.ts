import {
  Component,
  HostListener,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { GoAction } from '@sbg/common';

import { AdvisorClient, AdvisorDetailsData } from '@sbg/common';
import { NetWealthDetail, InvestmentType, TotalGraph } from '@sbg/common';

import { applicationReducer } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { AdvisorService } from '@sbg/common';
import { ClientService } from '@sbg/common';
import {
  offshoreGraphColor,
  offshoreGraphConfig,
  offshoreGaugeConfig
} from '../../graph-configs/net-wealth-offshore';

@Component({
  selector: 'client-net-wealth-offshore',
  templateUrl: 'client-net-wealth-offshore.component.html',
  styleUrls: ['client-net-wealth-offshore.component.scss']
})
export class ClientNetWealthOffshoreComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() model: Observable<NetWealthDetail>;
  @Input() types: Observable<InvestmentType[]>;

  totalGraphModel: Observable<TotalGraph>;

  assetsValue: string;
  liabilitiesValue: string;
  totalValue: string;

  windowWidth: number = window.innerWidth;

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
    this.graphColor = offshoreGraphColor();
    this.graphConfig = offshoreGraphConfig();
    this.gaugeConfig = offshoreGaugeConfig();
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
        if (selectedClient !== null && selectedClient !== undefined) {
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
        return (
          netWealthDetail !== null &&
          netWealthDetail.liabilitiesValue !== undefined
        );
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
        path: [`advisor/netwealth/offshore/typelist/offshore/${name}`]
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
