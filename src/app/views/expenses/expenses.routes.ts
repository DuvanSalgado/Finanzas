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
        loadComponent: () => import('./pages/overhead/overhead.component').then(m => m.OverheadComponent)
      },
      {
        path: 'fixed',
        loadComponent: () => import('./pages/fixed-expenses/fixed-expenses.component').then(m=> m.FixedExpensesComponent)
      },
      {
        path: 'category',
        loadComponent: () => import('./pages/category-expenses/category-expenses.component').then(m=> m.CategoryExpensesComponent)
      }
    ]
  }
];  