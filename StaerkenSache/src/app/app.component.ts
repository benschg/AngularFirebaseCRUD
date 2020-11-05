import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './shared.scss']
})
export class AppComponent {
  title = 'StaerkenSache';

  email: string;
  password: string;

  constructor(public authService: AuthService) {
  }
}
