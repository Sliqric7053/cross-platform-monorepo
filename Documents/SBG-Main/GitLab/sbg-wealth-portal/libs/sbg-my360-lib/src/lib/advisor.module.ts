import { TranslateModule } from '@ngx-translate/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'sbg-angular2-highcharts';
import { UIFrameworkModule } from '@sbg/common';
import { AdvisorRoutingModule } from './advisor.routing.module';
import { ServiceFrameworkModule } from '@sbg/common';

import { SbgLoaderModule } from '@sbg/components';
import { SbgTableModule } from '@sbg/components';

import { AdvisorHomePage } from './pages/advisor-home/advisor-home.page';
import { AdvisorClientListPage } from './pages/advisor-client-list/advisor-client-list.page';
import { AdvisorClientNetWealthPage } from './pages/advisor-client-net-wealth/advisor-client-net-wealth.page';
import { AdvisorClientNetWealthTypeDetailPage } from './pages/advisor-client-net-wealth-type-detail/advisor-client-net-wealth-type-detail.page';
import { AdvisorClientNetWealthTypeListPage } from './pages/advisor-client-net-wealth-type-list/advisor-client-net-wealth-type-list.page';
import { AdvisorClientDashboardPage } from './pages/advisor-client-dashboard/advisor-client-dashboard.page';
import { AdvisorClientAssetAllocationPage } from './pages/advisor-client-asset-allocation/advisor-client-asset-allocation.page';
import { AdvisorClientLinkedAccountsPage } from './pages/advisor-client-linked-accounts/advisor-client-linked-accounts.page';

import { ClientListFilterComponent } from './components/client/client-list-filter/client-list-filter.component';
import { ClientTotalGraphComponent } from './components/client/client-total-graph/client-total-graph.component';
import { ClientProductListDashboardTileComponent } from './components/client/client-product-list-dashboard-tile/client-product-list-dashboard-tile.component';
import { ClientNetWealthTypeGaugeComponent } from './components/client/client-net-wealth-type-gauge/client-net-wealth-type-gauge.component';
import { ClientProductDetailSpotlightComponent } from './components/client/client-product-detail-spotlight/client-product-detail-spotlight.component';
import { ClientNetWealthTypeTileComponent } from './components/client/client-net-wealth-type-tile/client-net-wealth-type-tile.component';
import { ClientNetWealthTypeComponent } from './components/client/client-net-wealth-type/client-net-wealth-type.component';
import { ClientNetWealthOnshoreComponent } from './components/client/client-net-wealth-onshore/client-net-wealth-onshore.component';
import { ClientNetWealthOffshoreComponent } from './components/client/client-net-wealth-offshore/client-net-wealth-offshore.component';
import { ClientNetWealthListComponent } from './components/client/client-net-wealth-list/client-net-wealth-list.component';
import { ClientNetWealthGraphComponent } from './components/client/client-net-wealth-graph/client-net-wealth-graph.component';
import { ClientNetWealthDashboardTileComponent } from './components/client/client-net-wealth-dashboard-tile/client-net-wealth-dashboard-tile.component';
import { ClientNetWealthCombinedComponent } from './components/client/client-net-wealth-combined/client-net-wealth-combined.component';
import { ClientGrowthGraphComponent } from './components/client/client-growth-graph/client-growth-graph.component';
import { ClientGrowthComponent } from './components/client/client-growth/client-growth.component';
import { ClientGhostTileComponent } from './components/client/client-ghost-tile/client-ghost-tile.component';
import { ClientGaugeGraphComponent } from './components/client/client-gauge-graph/client-gauge-graph.component';
import { ClientAssetAllocationOnshoreComponent } from './components/client/client-asset-allocation-onshore/client-asset-allocation-onshore.component';
import { ClientAssetAllocationOffshoreComponent } from './components/client/client-asset-allocation-offshore/client-asset-allocation-offshore.component';
import { ClientAssetAllocationGraphComponent } from './components/client/client-asset-allocation-graph/client-asset-allocation-graph.component';
import { ClientAssetAllocationDashboardTileComponent } from './components/client/client-asset-allocation-dashboard-tile/client-asset-allocation-dashboard-tile.component';
import { ClientAssetAllocationCombinedComponent } from './components/client/client-asset-allocation-combined/client-asset-allocation-combined.component';
import { AdvisorClientRowModule } from './components/client/client-row/client-row.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    SbgTableModule,
    SbgLoaderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AdvisorRoutingModule,
    ServiceFrameworkModule,
    ChartModule,
    UIFrameworkModule,
    TranslateModule,
    AdvisorClientRowModule
  ],
  declarations: [
    AdvisorHomePage,
    AdvisorClientListPage,
    AdvisorClientNetWealthPage,
    AdvisorClientNetWealthTypeDetailPage,
    AdvisorClientNetWealthTypeListPage,
    AdvisorClientDashboardPage,
    AdvisorClientAssetAllocationPage,
    AdvisorClientLinkedAccountsPage,
    ClientAssetAllocationCombinedComponent,
    ClientAssetAllocationDashboardTileComponent,
    ClientAssetAllocationGraphComponent,
    ClientAssetAllocationOffshoreComponent,
    ClientAssetAllocationOnshoreComponent,
    ClientGaugeGraphComponent,
    ClientGhostTileComponent,
    ClientGrowthComponent,
    ClientGrowthGraphComponent,
    ClientNetWealthCombinedComponent,
    ClientNetWealthDashboardTileComponent,
    ClientNetWealthGraphComponent,
    ClientNetWealthListComponent,
    ClientNetWealthOffshoreComponent,
    ClientNetWealthOnshoreComponent,
    ClientNetWealthTypeComponent,
    ClientNetWealthTypeTileComponent,
    ClientNetWealthTypeGaugeComponent,
    ClientProductDetailSpotlightComponent,
    ClientProductListDashboardTileComponent,
    ClientTotalGraphComponent,
    ClientListFilterComponent
  ],
  exports: [
    AdvisorHomePage,
    AdvisorClientListPage,
    AdvisorClientNetWealthPage,
    AdvisorClientNetWealthTypeDetailPage,
    AdvisorClientNetWealthTypeListPage,
    AdvisorClientDashboardPage,
    AdvisorClientAssetAllocationPage,
    AdvisorClientLinkedAccountsPage,
    ClientAssetAllocationCombinedComponent,
    ClientAssetAllocationDashboardTileComponent,
    ClientAssetAllocationGraphComponent,
    ClientAssetAllocationOffshoreComponent,
    ClientAssetAllocationOnshoreComponent,
    ClientGaugeGraphComponent,
    ClientGhostTileComponent,
    ClientGrowthComponent,
    ClientGrowthGraphComponent,
    ClientNetWealthCombinedComponent,
    ClientNetWealthDashboardTileComponent,
    ClientNetWealthGraphComponent,
    ClientNetWealthListComponent,
    ClientNetWealthOffshoreComponent,
    ClientNetWealthOnshoreComponent,
    ClientNetWealthTypeComponent,
    ClientNetWealthTypeTileComponent,
    ClientNetWealthTypeGaugeComponent,
    ClientProductDetailSpotlightComponent,
    ClientProductListDashboardTileComponent,
    ClientTotalGraphComponent,
    AdvisorClientRowModule
  ],
  providers: [],
  entryComponents: [ClientListFilterComponent]
})
export class AdvisorUIModule {
  constructor(public appRef: ApplicationRef) {}

  public ngDoBootstrap() {}
}
