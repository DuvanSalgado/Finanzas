import { Route } from "@angular/router";
import { ExpensesPage } from "./expenses.page";

export const EXPENSES_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '', component: ExpensesPage,
    children: [
      {
        path: 'overhead',
        loadComponent: () => import('./overhead/overhead.component').then(m => m.OverheadComponent)
      },
      {
        path: 'fixed',
        loadComponent: () => import('./fixed-expenses/fixed-expenses.component').then(m=> m.FixedExpensesComponent)
      }
    ]
  }
];  