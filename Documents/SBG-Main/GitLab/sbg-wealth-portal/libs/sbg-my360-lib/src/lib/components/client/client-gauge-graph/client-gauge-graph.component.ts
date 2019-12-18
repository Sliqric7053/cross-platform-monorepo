import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Palette } from '@sbg/common';
import { StyleService } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'client-gauge-graph',
  templateUrl: 'client-gauge-graph.component.html',
  styleUrls: ['client-gauge-graph.component.scss']
})
export class ClientGaugeGraphComponent implements OnInit, OnDestroy {
  @Input() model: number;
  @Input() chartOptions: Object;
  @Input() graphColor: string;
  @Input() name: string;

  chart: any;
  colours: Palette;

  subscriptions = new Subscription();

  saveInstance(chartInstance: any) {
    this.chart = chartInstance;
    this.populateGraph();
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

    this.populateGraph();
  }

  getGraphColor(name: string) {
    if (name === 'Bonds') {
      return '#1aaa77';
    }

    if (name === 'Cash') {
      return '#c8d1e5';
    }

    if (name === 'Equity') {
      return '#011747';
    }

    if (name === 'Listed Property') {
      return '#fc6627';
    }

    if (name === 'Other') {
      return '#6763c0';
    }

    if (name === 'Physical Property') {
      return '#1babdb';
    }

    if (name === 'Unknown') {
      return '#f7e644';
    }

    return this.graphColor;
  }

  populateGraph() {
    this.graphColor = this.getGraphColor(this.name);

    let smallPercentage: number;
    smallPercentage = this.model;

    this.model > 0 && this.model < 1
      ? (smallPercentage = 1)
      : (smallPercentage = this.model);

    if (this.chart) {
      this.chart.series[0].update({
        name: 'Inner',
        data: [
          { y: smallPercentage, color: this.graphColor },
          { y: 100 - smallPercentage, color: '#ededed' }
        ],
        size: '95%',
        innerSize: '75%',
        dataLabels: {
          enabled: false
        }
      });

      this.chart.title.update({
        text:
          '<div class="gauge-graph-percentage"><div>' +
          this.formatter.toDecimalPercentage(this.model, 1) +
          '</div></div>',
        x: -23,
        y: 7
      });

      this.chart.update({
        plotOptions: {
          pie: {
            shadow: false,
            center: ['40%', '50%'],
            borderWidth: 0
          }
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
