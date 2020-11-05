import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss']
})
export class UserPortalComponent implements OnInit {

  constructor(public  authService: AuthService,
              private storage: AngularFireStorage ) { }

  ngOnInit(): void {
  }

  LogoutUser(): void {
    this.authService.SignOut();
  }

}
