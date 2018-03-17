import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService} from './data-services/auth/auth-guard.service';
import { RedirectConnectedGuardService} from './data-services/auth/redirect-connected-guard.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { MapsManagerComponent } from './pages/maps-manager/maps-manager.component';
import { ClientComponent } from './pages/client/client.component';

const appRoutes: Routes = [
  { path: 'login',  component: HomePageComponent, canActivate: [RedirectConnectedGuardService]},
  { path: 'home',  component: UserHomeComponent, canActivate: [AuthGuardService]},
  { path: 'manage',  component: MapsManagerComponent, canActivate: [AuthGuardService]},
  { path: 'track',  component: ClientComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
