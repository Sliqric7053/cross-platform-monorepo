import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { InvestmentType } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'client-net-wealth-type-gauge',
  templateUrl: 'client-net-wealth-type-gauge.component.html',
  styleUrls: ['client-net-wealth-type-gauge.component.scss']
})
export class ClientNetWealthTypeGaugeComponent implements OnInit {
  @Output() typeSelected = new EventEmitter();

  @Input() model: InvestmentType;
  @Input() gaugeConfig: Object;
  @Input() graphColor: string;

  name: string;
  totalValueFormatted: string;
  percentage: number;

  constructor(public formatting: FormattingService) {}

  ngOnInit() {
    this.name = this.model.name;

    if (this.model.offShorePercentage) {
      this.percentage = this.model.offShorePercentage;
      this.totalValueFormatted = this.formatting.formatCurrency(
        this.model.offShoreValue
      );
    } else {
      this.percentage = this.model.onShorePercentage;
      this.totalValueFormatted = this.formatting.formatCurrency(
        this.model.onShoreValue
      );
    }
  }

  onTypeClicked() {
    this.typeSelected.emit(this.name);
  }
}
