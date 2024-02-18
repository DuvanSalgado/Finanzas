import { Route } from "@angular/router";
import { ExpensesPage } from "./expenses.page";

export const EXPENSES_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'overhead',
    pathMatch: 'full',
  },
  {
    path: '', component: ExpensesPage,
    children: [
      {
        path: 'overhead',
        loadComponent: () => import('./pages/overhead/overhead.page').then(m => m.OverheadPage)
      },
      {
        path: 'fixed',
        loadComponent: () => import('./pages/fixed-expenses/fixed-expenses.page').then(m=> m.FixedExpensesPage)
      },
      {
        path: 'category',
        loadComponent: () => import('./pages/category-expenses/category-expenses.page').then(m=> m.CategoryExpensesPage)
      }
    ]
  }
];  