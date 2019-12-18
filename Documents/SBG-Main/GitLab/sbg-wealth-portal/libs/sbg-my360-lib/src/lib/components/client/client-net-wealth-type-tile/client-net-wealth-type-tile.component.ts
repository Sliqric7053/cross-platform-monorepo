import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'client-net-wealth-type-tile',
  templateUrl: 'client-net-wealth-type-tile.component.html',
  styleUrls: ['client-net-wealth-type-tile.component.scss']
})
export class ClientNetWealthTypeTileComponent implements OnInit {
  @Output() tileTypeSelected = new EventEmitter();
  @Input() model: Product;
  @Input() type: string;
  @Input() name: string;

  productName: string;
  institutionName: string;
  currentValue: string;
  isOffShore: boolean;
  totalPercentage: string;

  constructor(public formatting: FormattingService) {}

  ngOnInit() {
    this.productName = this.formatting.toTitleCase(this.model.productName);
    this.institutionName = this.formatting.toTitleCase(
      this.model.institutionName
    );
    this.currentValue = this.formatting.formatCurrency(
      this.model.currentValue,
      this.model.currencyCode
    );
    this.isOffShore = this.model.isOffShore;

    if (this.type === 'Onshore') {
      this.totalPercentage = this.formatPercentage(
        this.model.netWealthComponent.onShorePercentage
      );
    } else if (this.type === 'Offshore') {
      this.totalPercentage = this.formatPercentage(
        this.model.netWealthComponent.offShorePercentage
      );
    } else {
      this.totalPercentage = this.formatPercentage(
        this.model.netWealthComponent.totalPercentage
      );
    }
  }

  formatPercentage(percentage: any): string {
    percentage =
      percentage.toFixed(1) < 0.1 && percentage.toFixed(1) > 0
        ? '<' + this.formatting.toDecimalPercentage(percentage, 1)
        : this.formatting.toDecimalPercentage(percentage, 1);
    return percentage;
  }

  onTypeClicked() {
    this.tileTypeSelected.emit();
  }
}
