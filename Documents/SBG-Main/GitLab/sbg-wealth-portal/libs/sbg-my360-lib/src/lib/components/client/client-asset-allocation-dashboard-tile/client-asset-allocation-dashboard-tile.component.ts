import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FetchProductDetailsResponse } from '@sbg/common';
import { applicationReducer } from '@sbg/common';

import { AssetAllocationDetail, TotalGraph } from '@sbg/common';

import { FormattingService } from '@sbg/common';
import { Store } from '@ngrx/store';
import { ProductService } from '@sbg/common';
import { assetAllocationDashboardTileGraphConfig } from '../../graph-configs/asset-allocation-dashboard-tile';

@Component({
  selector: 'client-asset-allocation-dashboard-tile',
  templateUrl: 'client-asset-allocation-dashboard-tile.component.html',
  styleUrls: ['client-asset-allocation-dashboard-tile.component.scss']
})
export class ClientAssetAllocationDashboardTileComponent
  implements OnInit, OnDestroy {
  @Output() tileSelected = new EventEmitter();
  @Input() model: Observable<AssetAllocationDetail>;
  @Input() isLinkable: string;
  @Input() currencyCode: string;

  productDetails: Observable<FetchProductDetailsResponse>;
  totalGraphModel: Observable<TotalGraph>;

  subscriptions = new Subscription();

  offShorePercentage: string;
  offShoreValue: string;
  onShorePercentage: string;
  onShoreValue: string;

  graphConfig: Object;

  constructor(
    public formatting: FormattingService,
    public store: Store<applicationReducer.State>,
    public productService: ProductService
  ) {
    this.graphConfig = assetAllocationDashboardTileGraphConfig();
  }

  ngOnInit() {
    this.bindData();

    this.productDetails = this.productService.getProductDetails();

    this.subscriptions.add(
      this.productDetails.subscribe(
        (productDetails: FetchProductDetailsResponse) => {
          if (productDetails && productDetails.assetAllocation) {
            this.offShoreValue = this.formatting.formatCurrency(
              productDetails.assetAllocation.offShoreValue,
              productDetails.currencyCode
            );

            this.onShoreValue = this.formatting.formatCurrency(
              productDetails.assetAllocation.onShoreValue,
              productDetails.currencyCode
            );
          }
        }
      )
    );
  }

  bindData() {
    this.subscriptions.add(
      this.model.subscribe((assetAllocationDetail: AssetAllocationDetail) => {
        if (assetAllocationDetail) {
          this.offShoreValue = this.formatting.formatCurrency(
            assetAllocationDetail.offShoreValue,
            this.currencyCode
          );
          this.onShoreValue = this.formatting.formatCurrency(
            assetAllocationDetail.onShoreValue,
            this.currencyCode
          );
          this.offShorePercentage = this.formatting.toDecimalPercentage(
            assetAllocationDetail.offShorePercentage,
            1
          );
          this.onShorePercentage = this.formatting.toDecimalPercentage(
            assetAllocationDetail.onShorePercentage,
            1
          );
        }
      })
    );

    this.totalGraphModel = this.model
      .filter((assetAllocationDetail: AssetAllocationDetail) => {
        return (
          assetAllocationDetail !== null && assetAllocationDetail !== undefined
        );
      })
      .map((assetAllocationDetail: AssetAllocationDetail) => {
        return {
          context: 'assetAllocation',
          seriesPointOne: assetAllocationDetail.onShoreValue,
          seriesPointTwo: assetAllocationDetail.offShoreValue
        };
      });
  }

  onTileClicked() {
    this.tileSelected.emit();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
