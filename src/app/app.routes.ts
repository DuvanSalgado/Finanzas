import { Routes } from '@angular/router';
import { HomePage } from './views/home/home.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'expenses',
        loadChildren: () => import('./views/expenses/expenses.routes').then(mod => mod.EXPENSES_ROUTES),
      },
      {
        path: 'loans',
        loadChildren: () => import('./views/loans/loans.routes').then(mod => mod.EXPENSES_ROUTES)
      },
    ],
  }
];
