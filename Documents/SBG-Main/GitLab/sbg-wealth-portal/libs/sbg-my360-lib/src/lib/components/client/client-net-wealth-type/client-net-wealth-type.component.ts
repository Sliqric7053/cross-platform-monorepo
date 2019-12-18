import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { InvestmentType } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'client-net-wealth-type',
  templateUrl: 'client-net-wealth-type.component.html',
  styleUrls: ['client-net-wealth-type.component.scss']
})
export class ClientNetWealthTypeComponent implements OnInit {
  @Output() typeSelected = new EventEmitter();
  @Input() model: InvestmentType;
  @Input() context: string;

  name: string;
  onShorePercentage: string;
  offShorePercentage: string;
  onShoreValue: string;
  offShoreValue: string;
  totalValue: string;

  constructor(public formatting: FormattingService) {}

  ngOnInit() {
    this.name = this.model.name;
    this.onShorePercentage = this.formatting.toDecimalPercentage(
      this.model.onShorePercentage,
      1
    );
    this.offShorePercentage = this.formatting.toDecimalPercentage(
      this.model.offShorePercentage,
      1
    );
    this.onShoreValue = this.formatting.formatCurrency(this.model.onShoreValue);
    this.offShoreValue = this.formatting.formatCurrency(
      this.model.offShoreValue
    );
    this.totalValue = this.formatting.formatCurrency(this.model.totalValue);
  }

  onTypeClicked() {
    this.typeSelected.emit(this.name);
  }
}
