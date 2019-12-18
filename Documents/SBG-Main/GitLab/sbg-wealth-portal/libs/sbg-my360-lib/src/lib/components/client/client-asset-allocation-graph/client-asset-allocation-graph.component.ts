import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AssetAllocationDetail, InvestmentType } from '@sbg/common';

import { Palette, StyleService } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'client-asset-allocation-graph',
  templateUrl: 'client-asset-allocation-graph.component.html',
  styleUrls: ['client-asset-allocation-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientAssetAllocationGraphComponent implements OnInit, OnDestroy {
  @Input() model: Observable<AssetAllocationDetail>;
  @Input() chartOptions: Object;
  @Input() productType: string;
  @Input() currencyCode: string;

  assetAllocationDetail: AssetAllocationDetail;
  assetAllocationTotal: number;
  chart: any;
  colours: Palette;

  subscriptions = new Subscription();

  saveInstance(chartInstance: any) {
    this.chart = chartInstance;
    this.formatGraphData(this.assetAllocationDetail);
  }

  constructor(
    public formatter: FormattingService,
    public palette: StyleService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.colours = this.palette.getPalette();

    this.subscriptions.add(
      this.activatedRoute.url.subscribe(() => {
        this.reflowChart();
      })
    );

    this.subscriptions.add(
      this.model.subscribe((assetAllocationDetail: AssetAllocationDetail) => {
        if (assetAllocationDetail) {
          this.assetAllocationDetail = assetAllocationDetail;
        }

        if (this.assetAllocationDetail) {
          this.formatGraphData(this.assetAllocationDetail);
        }
      })
    );
  }

  formatGraphData(assetAllocationDetail: AssetAllocationDetail) {
    let assetAllocationData: Object[] = [];
    let totalValue: number = 0;

    if (assetAllocationDetail) {
      totalValue = assetAllocationDetail.totalValue || 0;

      assetAllocationDetail.components.forEach(
        (data: InvestmentType, dataIndex) => {
          if (data) {
            let graphColor = '';
            let percentage = 0;
            let value = 0;

            if (this.productType === 'onshore') {
              percentage = data.onShorePercentage ? data.onShorePercentage : 0;
              value = data.onShoreValue ? data.onShoreValue : 0;
            } else if (this.productType === 'offshore') {
              percentage = data.offShorePercentage
                ? data.offShorePercentage
                : 0;
              value = data.offShoreValue ? data.offShoreValue : 0;
            } else {
              percentage = data.totalPercentage ? data.totalPercentage : 0;
              value = data.totalValue ? data.totalValue : 0;
            }

            this.palette
              .getGraphSeriesColours()
              .forEach((color: string, colorIndex) => {
                if (dataIndex === colorIndex) {
                  graphColor = color;
                }
              });

            assetAllocationData.push({
              name: this.formatGraphLegendAmounts(
                data.name,
                percentage,
                value,
                this.currencyCode
              ),
              y: value,
              color: graphColor
            });
          }
        }
      );
    }

    this.populateGraph(totalValue, assetAllocationData);
  }

  formatGraphLegendAmounts(name, percentage, value, currencyCode) {
    return (
      name +
      ' (' +
      this.formatter.toDecimalPercentage(percentage, 1) +
      ') ' +
      this.formatter.formatCurrency(value, currencyCode)
    );
  }

  formatGraphLegend(assetAllocationDetail) {
    let assetAllocationData: Object[] = [];

    if (assetAllocationDetail && assetAllocationDetail.components) {
      assetAllocationDetail.components.forEach(
        (data: InvestmentType, dataIndex) => {
          if (data) {
            let graphColor = '';
            let percentage = 0;
            let value = 0;

            if (this.productType === 'onshore') {
              percentage = data.onShorePercentage ? data.onShorePercentage : 0;
              value = data.onShoreValue ? data.onShoreValue : 0;
            } else if (this.productType === 'offshore') {
              percentage = data.offShorePercentage
                ? data.offShorePercentage
                : 0;
              value = data.offShoreValue ? data.offShoreValue : 0;
            } else {
              percentage = data.totalPercentage ? data.totalPercentage : 0;
              value = data.totalValue ? data.totalValue : 0;
            }

            this.palette
              .getGraphSeriesColours()
              .forEach((color: string, colorIndex) => {
                if (dataIndex === colorIndex) {
                  graphColor = color;
                }
              });

            assetAllocationData.push({
              name: this.formatGraphLegendAmounts(
                data.name,
                percentage,
                value,
                this.currencyCode
              ),
              y: Math.abs(value),
              color: graphColor
            });
          }
        }
      );
    }

    this.chart.series[0].update({
      allowPointSelect: false,
      name: 'Outer',
      data: assetAllocationData,
      size: '90%',
      innerSize: '75%',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    });
  }

  populateGraph(assetAllocationTotal: number, investmentTypes: Object[]) {
    this.assetAllocationTotal = assetAllocationTotal;
    if (this.chart) {
      this.chart.series[0].update({
        allowPointSelect: false,
        name: 'Outer',
        data: investmentTypes,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      });
    }

    this.reflowChart();
  }

  createTitle() {
    let _that = this;

    if (_that.currencyCode === 'Units') {
      this.chart.title.update({
        text: `<div class="asset-allocation-total-assets-heading">Total assets</div>
                     <div class="asset-allocation-total-assets-value">${this.formatter.formatCurrency(
                       this.assetAllocationTotal,
                       _that.currencyCode
                     )}</div>`
      });
    } else {
      this.chart.title.update({
        text: `<div class="asset-allocation-total-assets-heading">Total assets</div>
                     <div class="asset-allocation-total-assets-value">R ${this.formatter.abbreviateNumber(
                       this.assetAllocationTotal,
                       2
                     )}</div>`
      });
    }
  }

  reflowChart() {
    setTimeout(() => {
      this.chart.reflow();
      this.createTitle();
      this.formatGraphLegend(this.assetAllocationDetail);
    }, 0);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
