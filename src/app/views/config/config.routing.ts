import { Route } from '@angular/router';
import { ConfigPage } from './config.page';

export const CONFIG_ROUTES: Route[] = [
  {
    path: '',
    component: ConfigPage,
    children: [
      {
        path: 'paymentMetods',
        loadComponent: () =>
          import('./pages/payment-methods/payment-methods.page').then(
            (m) => m.PaymentMethodsPage
          ),
      },
      {
        path: 'categoty',
        loadComponent: () =>
          import('./pages/category/category.page').then((m) => m.CaregoryPage),
      },
    ],
  },
];
