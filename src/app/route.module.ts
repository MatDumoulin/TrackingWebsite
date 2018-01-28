import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuardService} from './data-services/auth-guard.service';
import { HomepageComponent }   from './pages/homepage/homepage.component';
import { MapsManagerComponent }     from './pages/maps-manager/maps-manager.component';
import { ClientComponent }   from './pages/client/client.component';

const appRoutes: Routes = [
  { path: 'home',  component: HomepageComponent},
  { path: 'maps',  component: MapsManagerComponent, canActivate: [AuthGuardService]},
  { path: 'client',  component: ClientComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/home' }
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