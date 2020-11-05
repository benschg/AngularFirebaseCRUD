import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPortalComponent } from './user-portal/user-portal.component';

const routes: Routes = [
   { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

   { path:  'user-portal', component: UserPortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
