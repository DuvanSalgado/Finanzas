import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full',
  },
  {
    path: '',
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
 