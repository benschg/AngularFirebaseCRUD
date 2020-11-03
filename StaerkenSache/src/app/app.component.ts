import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StaerkenSache';

  email: string;
  password: string;

  constructor(public authService: AuthService) {
}


  // tslint:disable-next-line: typedef
  signup() {
  this.authService.signup(this.email, this.password);
  this.email = this.password = '';
}
  // tslint:disable-next-line: typedef
  login() {
  this.authService.login(this.email, this.password);
  this.email = this.password = '';
}

  // tslint:disable-next-line: typedef
  logout() {
  this.authService.logout();
}
}