import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as momentNs from 'moment';
const moment = momentNs;
import { Subscription } from 'rxjs/Subscription';

import { NetWealthDetail, NetWealthHistoricalData } from '@sbg/common';

@Component({
  selector: 'client-net-wealth-graph',
  templateUrl: 'client-net-wealth-graph.component.html',
  styleUrls: ['client-net-wealth-graph.component.scss']
})
export class ClientNetWealthGraphComponent implements OnInit, OnDestroy {
  @Input() model: Observable<NetWealthDetail>;
  @Input() chartOptions: Object;
  @Input() isMobile: boolean;

  netWealthDetail: NetWealthDetail;
  netWealthHistoricalData: NetWealthHistoricalData[];
  chart: any;

  subscriptions = new Subscription();

  saveInstance(chartInstance: any) {
    this.chart = chartInstance;
    this.formatGraphData(this.netWealthHistoricalData);
  }

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscriptions.add(
      this.activatedRoute.url.subscribe(() => {
        this.reflowChart();
      })
    );

    this.subscriptions.add(
      this.model.subscribe((netWealthDetail: NetWealthDetail) => {
        if (netWealthDetail) {
          this.netWealthDetail = netWealthDetail;
        }

        if (this.netWealthDetail) {
          if (this.netWealthDetail.historicalData) {
            this.netWealthHistoricalData = this.netWealthDetail.historicalData;
          }
        }

        this.formatGraphData(this.netWealthHistoricalData);
      })
    );
  }

  formatGraphData(historicalData: NetWealthHistoricalData[]) {
    let formattedDates: string[] = [];
    let toolTipDates: string[] = [];
    let formattedData: number[] = [];

    if (historicalData) {
      historicalData.filter(
        (
          data: NetWealthHistoricalData,
          index: number,
          self: NetWealthHistoricalData[]
        ) => {
          if (data) {
            let endDate = self.length - 1;
            let startDate = endDate - 12;
            const toolTipDate = moment(data.date)
              .utc()
              .format('DD-MM-YYYY');
            if (this.isMobile) {
              if (index > startDate) {
                let date = moment(data.date)
                  .utc()
                  .format('DD MMM');
                formattedDates.push(date);
                toolTipDates.push(toolTipDate);
                formattedData.push(data.value);
              }
            } else {
              let date = moment(data.date)
                .utc()
                .format('DD MMM');
              formattedDates.push(date);
              toolTipDates.push(toolTipDate);
              formattedData.push(data.value);
            }
          }
        }
      );
    }

    // TODO: Format data / dates to only display uniq elements
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
