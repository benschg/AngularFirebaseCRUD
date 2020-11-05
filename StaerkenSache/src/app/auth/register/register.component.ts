import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public  authService: AuthService,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }


  SignUp(userEmail: string, password: string): void {
    this.authService.signup(userEmail, password);
  }

  GoogleAuth(): void {
    this.authService.GoogleAuth();
  }

}
