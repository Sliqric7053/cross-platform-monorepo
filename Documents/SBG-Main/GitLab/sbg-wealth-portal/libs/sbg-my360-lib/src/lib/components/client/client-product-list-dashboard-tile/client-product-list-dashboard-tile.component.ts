import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product } from '@sbg/common';

@Component({
  selector: 'client-product-list-dashboard-tile',
  templateUrl: 'client-product-list-dashboard-tile.component.html',
  styleUrls: ['client-product-list-dashboard-tile.component.scss']
})
export class ClientProductListDashboardTileComponent implements OnInit {
  @Output() tileSelected = new EventEmitter();

  @Input() groupProducts: Observable<Product[]>;
  @Input() thirdPartyProducts: Observable<Product[]>;
  @Input() unmanagedProducts: Observable<Product[]>;

  groupProductsCount: Observable<number>;
  thirdPartyCount: Observable<number>;
  unmanagedProductsCount: Observable<number>;

  constructor() {}

  ngOnInit() {
    this.bindData();
  }

  bindData() {
    this.groupProductsCount = this.groupProducts
      .filter((products: Product[]) => {
        return products !== null && products !== undefined;
      })
      .map((products: Product[]) => {
        return products.length;
      });

    this.thirdPartyCount = this.thirdPartyProducts
      .filter((products: Product[]) => {
        return products !== null && products !== undefined;
      })
      .map((products: Product[]) => {
        return products.length;
      });

    this.unmanagedProductsCount = this.unmanagedProducts
      .filter((products: Product[]) => {
        return products !== null && products !== undefined;
      })
      .map((products: Product[]) => {
        return products.length;
      });
  }

  getProductsCount(
    groupProductsCount,
    thirdPartyCount,
    unmanagedProductsCount
  ) {
    return groupProductsCount + thirdPartyCount + unmanagedProductsCount;
  }

  onTileClicked() {
    this.tileSelected.emit();
  }
}
