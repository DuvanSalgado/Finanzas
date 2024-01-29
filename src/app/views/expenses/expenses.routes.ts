import { Route } from "@angular/router";
import { ExpensesPage } from "./expenses.page";

export const EXPENSES_ROUTES: Route[] = [

  {
    path: '', component: ExpensesPage,
    children: [
      {
        path: '',
        loadComponent: () => import('./overhead/overhead.component').then(m => m.OverheadComponent)
      }
    ]
  }
];