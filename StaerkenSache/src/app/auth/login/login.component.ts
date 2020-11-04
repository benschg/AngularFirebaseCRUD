import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../shared.scss']
})

export class LoginComponent implements OnInit {

  constructor(private  authService: AuthService) { }

  ngOnInit(): void {
  }

}

