import { Route } from '@angular/router';
import { ConfigPage } from './config.page';

export const CONFIG_ROUTES: Route[] = [
  {
    path: '',
    component: ConfigPage,
    children: [
      {
        path: 'category',
        loadComponent: () =>
          import('./pages/category/category.page').then((m) => m.CaregoryPage),
      },
      {
        path: 'paymentMethods',
        loadComponent: () =>
          import('./pages/payment-methods/payment-methods.page').then(
            (m) => m.PaymentMethodsPage
          ),
      },
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full',
      },
    ],
  },
];
