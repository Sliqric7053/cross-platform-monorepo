/**
 * Injected routing for wealth portal routes
 * Configured rotes:
 * clients : Searchable client list page for the advisor
 * client : the client dashboard page , a grid of net wealth , asset allocation, wealth quotient and product list
 * client/netwealth : the client net wealth page
 * client/assetallocation : the client asset allocation page
 * client/productlist : the client product list wealth page
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '@sbg/common';
import { AdvisorHomePage } from './pages/advisor-home/advisor-home.page';
import { AdvisorClientListPage } from './pages/advisor-client-list/advisor-client-list.page';
import { AdvisorClientDashboardPage } from './pages/advisor-client-dashboard/advisor-client-dashboard.page';
import { AdvisorClientNetWealthPage } from './pages/advisor-client-net-wealth/advisor-client-net-wealth.page';
import { AdvisorClientNetWealthTypeListPage } from './pages/advisor-client-net-wealth-type-list/advisor-client-net-wealth-type-list.page';
import { AdvisorClientNetWealthTypeDetailPage } from './pages/advisor-client-net-wealth-type-detail/advisor-client-net-wealth-type-detail.page';
import { AdvisorClientAssetAllocationPage } from './pages/advisor-client-asset-allocation/advisor-client-asset-allocation.page';
import { AdvisorClientLinkedAccountsPage } from './pages/advisor-client-linked-accounts/advisor-client-linked-accounts.page';

export function getClientName() {
  // TODO Needs to be an observable
  let clientName = localStorage.getItem('client-firstName') + "'s";
  return clientName.toLowerCase() + ' Dashboard';
}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'advisor',
        component: AdvisorHomePage,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: AdvisorClientListPage
          },
          {
            path: 'dashboard',
            component: AdvisorClientDashboardPage,
            data: {
              breadcrumb: 'Dashboard',
              breadcrumbNew: [
                {
                  displayName: getClientName
                }
              ]
            }
          },
          {
            path: 'netwealth',
            redirectTo: 'netwealth/combined',
            data: {
              breadcrumb: 'Netwealth',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Net Wealth'
                }
              ]
            }
          },
          {
            path: 'netwealth/:type1',
            component: AdvisorClientNetWealthPage,
            data: {
              breadcrumb: 'Netwealth',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Net Wealth'
                }
              ]
            }
          },
          {
            path: 'netwealth/:type1/typelist/:type2/:type3',
            component: AdvisorClientNetWealthTypeListPage,
            data: {
              breadcrumb: 'Typelist',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Net Wealth',
                  path: '/advisor/netwealth'
                },
                {
                  displayParam: 'type3'
                }
              ]
            }
          },
          {
            path: 'netwealth/:type1/typelist/:type2/:type3/typedetail/:type4',
            component: AdvisorClientNetWealthTypeDetailPage,
            data: {
              breadcrumb: 'Typelist',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Net Wealth',
                  path: '/advisor/netwealth'
                },
                {
                  displayParam: 'type3',
                  path: '/advisor/netwealth/type1/typelist/type2/type3'
                },
                {
                  displayName: 'Product Details'
                }
              ]
            }
          },
          {
            path: 'assetallocation',
            redirectTo: 'assetallocation/combined'
          },
          {
            path: 'assetallocation/:type1',
            component: AdvisorClientAssetAllocationPage,
            data: {
              breadcrumb: 'Asset Allocation',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Asset Allocation'
                }
              ]
            }
          },
          {
            path: 'assetallocation/:type1/typelist/:type2/:type3',
            component: AdvisorClientNetWealthTypeListPage,
            data: {
              breadcrumb: 'Asset Allocation',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Asset Allocation',
                  path: '/advisor/assetallocation'
                },
                {
                  displayParam: 'type3'
                }
              ]
            }
          },
          {
            path:
              'assetallocation/:type1/typelist/:type2/:type3/typedetail/:type4',
            component: AdvisorClientNetWealthTypeDetailPage,
            data: {
              breadcrumb: 'Typelist',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Asset Allocation',
                  path: '/advisor/assetallocation'
                },
                {
                  displayParam: 'type3',
                  path: '/advisor/assetallocation/type1/typelist/type2/type3'
                },
                {
                  displayName: 'Product Details'
                }
              ]
            }
          },
          {
            path: 'linkedaccounts',
            component: AdvisorClientLinkedAccountsPage,
            data: {
              breadcrumb: 'Linked Accounts',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Linked Accounts'
                }
              ]
            }
          },
          {
            path: 'linkedaccounts/productdetails/:type1/:type2',
            component: AdvisorClientNetWealthTypeDetailPage,
            data: {
              breadcrumb: 'Linked Accounts',
              breadcrumbNew: [
                {
                  displayName: getClientName,
                  path: '/advisor/dashboard'
                },
                {
                  displayName: 'Linked Accounts',
                  path: '/advisor/linkedaccounts'
                },
                {
                  displayName: 'Product Details'
                }
              ]
            }
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdvisorRoutingModule {}
