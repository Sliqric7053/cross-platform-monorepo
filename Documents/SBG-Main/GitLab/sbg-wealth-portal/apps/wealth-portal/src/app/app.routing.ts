import { NotFoundPage } from './pages/base/not-found/not-found.page';
import { UnauthorizedPage } from './pages/base/unauthorized/unauthorized.page';
import { Routes, RouterModule } from '@angular/router';
import { DlisPageComponent } from './pages/third-party/dlis/dlis.page.component';
import { EliteWealthPageComponent } from './pages/third-party/elite-wealth/elite-wealth.page.component';

export const appRoutes: Routes = [
  {
    path: 'goalsaver',
    pathMatch: 'full',
    redirectTo: 'goalsetter/client/list'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'advisor'
  },
  {
    path: 'dlis',
    component: DlisPageComponent
  },
  {
    path: 'elite-wealth',
    component: EliteWealthPageComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
