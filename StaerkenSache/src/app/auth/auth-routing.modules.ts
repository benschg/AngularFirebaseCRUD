import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { Routes } from '@angular/router';


const routes: Routes  = [
{
path:  'auth',
component: ProjectComponent,

children: [
    // [...]
    { path:  'login',component:  LoginComponent},
    { path:  'register', component:  RegisterComponent },
    { path:  'forgot-password', component:  ForgotPasswordComponent },
    { path:  'verify-email', component:  VerifyEmailComponent }
]
}
];
