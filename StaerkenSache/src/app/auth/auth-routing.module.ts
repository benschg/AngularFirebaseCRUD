import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


export const routes: Routes  = [{
    path:  'auth', component: AppComponent,

    children: [
        // [...]
        { path:  'login', component:  LoginComponent},
        { path:  'register', component:  RegisterComponent },
        { path:  'forgot-password', component:  ForgotPasswordComponent },
        { path:  'verify-email', component:  VerifyEmailComponent }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
