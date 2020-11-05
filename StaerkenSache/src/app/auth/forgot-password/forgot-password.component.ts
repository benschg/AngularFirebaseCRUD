import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private  authService: AuthService,) { }

  ngOnInit(): void {
  }

  async ForgotPassword(emailAddress: string) : Promise<void>
  {
    return await this.authService.sendPasswordResetEmail(emailAddress);
  }

}
