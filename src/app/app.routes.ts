import { Routes } from '@angular/router'
import { LayoutMainComponent } from '@layouts/layout-main/layout-main.component'

export const routes: Routes = [
  {
    path: 'route1',
    component: LayoutMainComponent,
    loadChildren: () => import('./routes/route1/routes').then((mod) => mod.route1Routes),
  },
  {
    path: 'route2',
    component: LayoutMainComponent,
    loadChildren: () => import('./routes/route2/routes').then((mod) => mod.route2Routes),
  },
  {
    path: '**',
    redirectTo: '/route1',
  },
]
