import {
  Component,
  Input,
  HostListener,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { GoAction } from '@sbg/common';

import { AdvisorClient, AdvisorDetailsData } from '@sbg/common';
import { NetWealthDetail, InvestmentType, TotalGraph } from '@sbg/common';

import { advisorReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';
import { FormattingService } from '@sbg/common';
import { netWealthCombinedGraphConfig } from '../../graph-configs/net-wealth-combined';

@Component({
  selector: 'client-net-wealth-combined',
  templateUrl: 'client-net-wealth-combined.component.html',
  styleUrls: ['client-net-wealth-combined.component.scss']
})
export class ClientNetWealthCombinedComponent
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

  subscriptions = new Subscription();

  context = 'Net wealth combined';

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>
  ) {
    this.graphConfig = netWealthCombinedGraphConfig();
  }

  ngOnInit() {
    this.loggedInAdvisor = this.store.pipe(
      select(advisorReducer.getAdvisorDetails)
    );

    this.subscriptions.add(
      this.loggedInAdvisor.subscribe((loggedInAdvisor: AdvisorDetailsData) => {
        if (loggedInAdvisor) {
          this.loggedInAdvisorBpId = loggedInAdvisor.bpid;
          this.loggedInAdvisorId = loggedInAdvisor.idNumber;
        }
      })
    );

    this.bindData();
  }

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  resize(event: object) {
    this.windowWidth = window.innerWidth;
  }

  bindData() {
    this.selectedClient = this.store.pipe(
      select(advisorReducer.getSelectedClient)
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
        this.assetsValue = this.formatting.formatCurrency(
          netWealthDetail.assetsValue
        );
        this.liabilitiesValue = this.formatting.formatCurrency(
          netWealthDetail.liabilitiesValue
        );
        this.totalValue = this.formatting.formatCurrency(
          netWealthDetail.totalValue
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

  typeSelected(name: string) {
    this.store.dispatch(
      new GoAction({
        path: [`advisor/netwealth/combined/typelist/combined/${name}`]
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
