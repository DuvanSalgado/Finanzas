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
        loadComponent: () => import('./views/expenses/expenses.page').then(m => m.ExpensesPage)
      },
      {
        path: 'loans',
        loadComponent: () => import('./views/loans/loans.page').then(m => m.LoansPage)
      },
    ],
  }
];
