import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bungalows',
    loadChildren: () => import('./bungalows/bungalows.module').then(m => m.BungalowsModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'Users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
