import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@footer').then((m) => m.FooterComponent),
    children: [
      {
        path: 'expenses',
        loadChildren: () =>
          import('./views/expenses/expenses.routes').then(
            (mod) => mod.EXPENSES_ROUTES
          ),
      },
      {
        path: 'loans',
        loadComponent: () =>
          import('./views/loans/loans.page').then((m) => m.LoansPage),
      },
      {
        path: '',
        redirectTo: 'expenses',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'config',
    loadChildren: () =>
      import('./views/config/config.routing').then((mod) => mod.CONFIG_ROUTES),
  },
];
