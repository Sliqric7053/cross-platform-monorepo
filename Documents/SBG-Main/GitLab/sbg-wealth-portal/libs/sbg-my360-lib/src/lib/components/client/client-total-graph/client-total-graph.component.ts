import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TotalGraph } from '@sbg/common';

import { Palette, StyleService } from '@sbg/common';

@Component({
  selector: 'client-total-graph',
  templateUrl: 'client-total-graph.component.html',
  styleUrls: ['client-total-graph.component.scss']
})
export class ClientTotalGraphComponent implements OnInit, OnDestroy {
  @Input() model: Observable<TotalGraph>;

  graphData: TotalGraph;
  assetsPercentage: string = '';
  liabilitiesPercentage: string = '';

  colours: Palette;

  subscriptions = new Subscription();

  @ViewChild('assetWidth', { static: true }) assetWidth: ElementRef;
  @ViewChild('liabilitiesWidth', { static: true }) liabilitiesWidth: ElementRef;

  constructor(public palette: StyleService) {}

  ngOnInit() {
    this.colours = this.palette.getPalette();

    this.subscriptions.add(
      this.model.subscribe((graphData: TotalGraph) => {
        if (graphData) {
          let assets = Math.abs(graphData.seriesPointOne);
          let liabilities = Math.abs(graphData.seriesPointTwo);
          let equity = assets + liabilities;

          this.assetsPercentage = ((assets / equity) * 100).toFixed() + '%';
          this.liabilitiesPercentage =
            ((liabilities / equity) * 100).toFixed() + '%';

          this.assetWidth.nativeElement.style.width = this.assetsPercentage;
          this.liabilitiesWidth.nativeElement.style.width = this.liabilitiesPercentage;

          if (graphData.context === 'netWealth-assets') {
            const assetsValue = ((assets / liabilities) * 100).toFixed();

            this.assetsPercentage = assetsValue + '%';
            this.liabilitiesPercentage = 100 - Number(assetsValue) + '%';

            this.assetWidth.nativeElement.style.width = this.assetsPercentage;
            this.liabilitiesWidth.nativeElement.style.width = this.liabilitiesPercentage;

            this.assetWidth.nativeElement.style.backgroundColor = this.colours.positiveColor;
            this.liabilitiesWidth.nativeElement.style.backgroundColor = this.colours.grayDarkColor;
          }

          if (graphData.context === 'netWealth-liabilities') {
            const liabilitiesValue = ((liabilities / equity) * 100).toFixed();

            this.assetsPercentage = liabilitiesValue + '%';
            this.liabilitiesPercentage = 100 - Number(liabilitiesValue) + '%';

            this.assetWidth.nativeElement.style.width = this.assetsPercentage;
            this.liabilitiesWidth.nativeElement.style.width = this.liabilitiesPercentage;

            this.assetWidth.nativeElement.style.backgroundColor = this.colours.negativeColor;
            this.liabilitiesWidth.nativeElement.style.backgroundColor = this.colours.grayDarkColor;
          }

          if (graphData.context === 'assetAllocation') {
            this.assetWidth.nativeElement.style.backgroundColor = this.colours.graph11;
            this.liabilitiesWidth.nativeElement.style.backgroundColor = this.colours.graph10;
          }

          if (graphData.context === 'netWealth-detail') {
            this.assetWidth.nativeElement.style.backgroundColor = this.colours.positiveColor;
            this.liabilitiesWidth.nativeElement.style.backgroundColor = this.colours.negativeColor;
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
