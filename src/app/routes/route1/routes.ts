import { Route } from '@angular/router'
import { Route1Component } from './components/route1/route1.component'

export const route1Routes: Route[] = [
  {
    path: ':paramId',
    component: Route1Component,
  },
  {
    path: '',
    component: Route1Component,
  },
]
