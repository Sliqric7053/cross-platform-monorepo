import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as momentNs from 'moment';
const moment = momentNs;
import { Subscription } from 'rxjs/Subscription';

import { GrowthData, CashFlowItem } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'client-growth-graph',
  templateUrl: 'client-growth-graph.component.html',
  styleUrls: ['client-growth-graph.component.scss']
})
export class ClientGrowthGraphComponent implements OnInit, OnDestroy {
  @Input() model: Observable<GrowthData>;
  @Input() chartOptions: Object;
  @Input() isMobile: boolean;

  netWealthHistoricalData: CashFlowItem[];

  chart: any;

  subscriptions = new Subscription();

  saveInstance(chartInstance: any) {
    this.chart = chartInstance;
    this.formatGraphData(this.netWealthHistoricalData);
  }

  constructor(
    public formatting: FormattingService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.activatedRoute.url.subscribe(() => {
        this.reflowChart();
      })
    );

    this.subscriptions.add(
      this.model.subscribe((growthData: GrowthData) => {
        if (growthData) {
          if (growthData.historicalData) {
            this.netWealthHistoricalData = growthData.historicalData;
          }
        }

        this.formatGraphData(this.netWealthHistoricalData);
      })
    );
  }

  formatGraphData(historicalData: CashFlowItem[]) {
    let formattedDates: string[] = [];
    let toolTipDates: string[] = [];
    let formattedData: number[] = [];

    if (historicalData) {
      historicalData.slice(-6).filter((data: CashFlowItem, index: number) => {
        if (data) {
          const toolTipDate = moment(data.date)
            .utc()
            .format('DD-MM-YYYY');

          let date = moment(data.date)
            .utc()
            .format('DD MMM')
            .toLocaleUpperCase();
          formattedDates.push(date);
          toolTipDates.push(toolTipDate);
          formattedData.push(data.value);
        }
      });
    }

    this.populateGraph(formattedDates, formattedData, toolTipDates);
  }

  populateGraph(
    formattedDates: string[],
    historicalData: number[],
    toolTipDates: string[]
  ) {
    if (this.chart) {
      this.chart.xAxis[0].update({
        labels: {
          enabled: true,
          rotation: -45,
          formatter: function() {
            return formattedDates[this.value];
          }
        }
      });

      this.chart.series[0].update({
        data: historicalData
      });
    }

    if (this.chart) {
      let randsAndDates2 = {
        rands: [...historicalData],
        dates: [...toolTipDates]
      };

      this.chart.tooltip.update({
        formatter: function() {
          return (
            '<div>R ' +
            randsAndDates2.rands[this.x]
              .toFixed(2)
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') +
            '</div><br>' +
            '<div>' +
            randsAndDates2.dates[this.x] +
            '</div>'
          );
        }
      });
    }

    this.reflowChart();
  }

  reflowChart() {
    setTimeout(() => {
      this.chart.reflow();
    }, 0);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
