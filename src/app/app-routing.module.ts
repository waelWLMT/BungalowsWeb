import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'bungalows',
    loadChildren: () => import('./features/bungalows/bungalows.module').then(m => m.BungalowsModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./features/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./features/reservations/reservations.module').then(m => m.ReservationsModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
