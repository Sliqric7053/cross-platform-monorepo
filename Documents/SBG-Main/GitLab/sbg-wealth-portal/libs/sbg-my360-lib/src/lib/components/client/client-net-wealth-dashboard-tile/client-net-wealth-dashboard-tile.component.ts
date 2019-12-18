import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NetWealthDetail, TotalGraph } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { netWealthDashboardTileGraphConfig } from '../../graph-configs/net-wealth-dashboard-tile';

@Component({
  selector: 'client-net-wealth-dashboard-tile',
  templateUrl: 'client-net-wealth-dashboard-tile.component.html',
  styleUrls: ['client-net-wealth-dashboard-tile.component.scss']
})
export class ClientNetWealthDashboardTileComponent
  implements OnInit, OnDestroy {
  @Output() tileSelected = new EventEmitter();
  @Input() model: Observable<NetWealthDetail>;
  @Input() isLinkable: string;
  totalGraphModelAssets: Observable<TotalGraph>;
  totalGraphModelLiabilties: Observable<TotalGraph>;

  assetsValue: string;
  liabilitiesValue: string;
  totalValue: string;

  graphConfig: Object;

  subscriptions = new Subscription();

  constructor(public formatting: FormattingService) {
    this.graphConfig = netWealthDashboardTileGraphConfig();
  }

  ngOnInit() {
    this.bindData();
  }

  bindData() {
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

    this.totalGraphModelAssets = this.model
      .filter((netWealthDetail: NetWealthDetail) => {
        return netWealthDetail !== null && netWealthDetail !== undefined;
      })
      .map((netWealthDetail: NetWealthDetail) => {
        return {
          context: 'netWealth-assets',
          seriesPointOne:
            netWealthDetail.assetsValue + netWealthDetail.liabilitiesValue,
          seriesPointTwo: netWealthDetail.assetsValue
        };
      });

    this.totalGraphModelLiabilties = this.model
      .filter((netWealthDetail: NetWealthDetail) => {
        return netWealthDetail !== null && netWealthDetail !== undefined;
      })
      .map((netWealthDetail: NetWealthDetail) => {
        return {
          context: 'netWealth-liabilities',
          seriesPointOne:
            netWealthDetail.assetsValue + netWealthDetail.liabilitiesValue,
          seriesPointTwo: netWealthDetail.liabilitiesValue
        };
      });
  }

  onTileClicked() {
    this.tileSelected.emit();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
