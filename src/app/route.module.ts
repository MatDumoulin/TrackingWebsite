import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomepageComponent }   from './pages/homepage/homepage.component';
import { MapsManagerComponent }     from './pages/maps-manager/maps-manager.component';

const appRoutes: Routes = [
  { path: 'home',  component: HomepageComponent },
  { path: 'maps',  component: MapsManagerComponent },
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