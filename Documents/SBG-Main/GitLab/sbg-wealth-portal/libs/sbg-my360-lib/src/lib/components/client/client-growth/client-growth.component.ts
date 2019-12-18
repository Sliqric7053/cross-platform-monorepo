import { FetchProductDetailsResponse } from '@sbg/common';
import {
  Component,
  OnInit,
  Input,
  HostListener,
  AfterViewInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { productActions } from '@sbg/common';

import { GrowthData } from '@sbg/common';

import { applicationReducer } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { StyleService } from '@sbg/common';

@Component({
  selector: 'client-growth',
  templateUrl: 'client-growth.component.html',
  styleUrls: ['client-growth.component.scss']
})
export class ClientGrowthComponent implements OnInit, AfterViewInit {
  @Input() dropdownData: string[];
  @Input() productDetails: FetchProductDetailsResponse;
  @Input() graphData: Observable<GrowthData>;
  @Input() isLiability: boolean;
  @Input() currencyCode: string;
  @Input() selectedDropdownOption: string;

  dropdownData$: Observable<string>;

  windowWidth: number = window.innerWidth;

  graphConfig: Object;
  startValue: string;
  selectedOption: string;
  isFundOfFunds: boolean;

  constructor(
    public formatting: FormattingService,
    public palette: StyleService,
    public store: Store<applicationReducer.State>
  ) {
    let colours = palette.getPalette();

    let _that = this;

    this.graphConfig = {
      chart: {
        type: 'area',
        height: 200
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: true,
          formatter: function() {
            return '';
          }
        },
        tickColor: 'transparent',
        tickInterval: 1,
        minPadding: 0,
        maxPadding: 0,
        startOnTick: true,
        endOnTick: true
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          formatter: function() {
            return this.value;
          }
        }
      },
      tooltip: {
        backgroundColor: colours.whiteColor,
        style: {
          color: colours.graph1
        },
        borderColor: '#999999',
        borderRadius: 6,
        borderWidth: 1,
        shape: 'square',
        shadow: false,
        formatter: function() {
          return (
            '<div>R ' +
            this.y.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') +
            '</div>'
          );
        }
      },
      plotOptions: {
        series: {
          color: colours.graph5,
          marker: {
            enabled: false
          }
        },
        area: {
          lineColor: colours.graph5,
          lineWidth: 2,
          marker: {
            lineWidth: 1,
            lineColor: colours.graph5
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [
        {
          data: [],
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [[0, colours.graph5], [1, colours.graph5.alpha(0.01)]]
          },
          fillOpacity: 1
        }
      ]
    };
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  resize(event: object) {
    this.windowWidth = window.innerWidth;
  }

  onChange(selectedOption: string) {
    this.store.dispatch(
      new productActions.UpdateSelectedProductGrowthProductOptionAction(
        selectedOption
      )
    );
  }

  getFormattedStartValue(): string {
    if (this.productDetails && this.productDetails.productGrowth) {
      return this.formatting.formatCurrency(
        this.productDetails.productGrowth.startValue,
        this.productDetails.currencyCode
      );
    }
  }

  getIsFundOfFunds(): boolean {
    return (
      this.productDetails.productGrowth &&
      this.productDetails.productGrowth.dataSets &&
      this.productDetails.productGrowth.dataSets.length > 1
    );
  }
}
