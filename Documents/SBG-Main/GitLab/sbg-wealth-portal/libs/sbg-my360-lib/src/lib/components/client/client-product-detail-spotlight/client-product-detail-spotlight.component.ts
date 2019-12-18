import { Component, OnInit, Input } from '@angular/core';
import * as momentNs from 'moment';
const moment = momentNs;
import { FetchProductDetailsResponse } from '@sbg/common';

import { FormattingService } from '@sbg/common';

@Component({
  selector: 'client-product-detail-spotlight',
  templateUrl: 'client-product-detail-spotlight.component.html',
  styleUrls: ['client-product-detail-spotlight.component.scss']
})
export class ClientProductDetailSpotlightComponent implements OnInit {
  @Input() productDetails: FetchProductDetailsResponse;
  @Input() institutionName: string;
  @Input() loading: boolean;

  constructor(public formatting: FormattingService) {}

  ngOnInit() {}

  getHasForeignValue() {
    if (
      this.productDetails.sourceCurrency !== this.productDetails.currencyCode
    ) {
      return true;
    }

    return false;
  }

  getFormattedCurrentValue(): string {
    return this.formatting.formatCurrency(
      this.productDetails.currentValue,
      this.productDetails.currencyCode
    );
  }

  getFormattedSourceValue(): string {
    return this.formatting.formatCurrency(
      this.productDetails.sourceValue,
      this.productDetails.sourceCurrency
    );
  }

  getFormattedStartDate(): string {
    return moment(this.productDetails.startDate)
      .utc()
      .format('DD MMMM YYYY');
  }
}
