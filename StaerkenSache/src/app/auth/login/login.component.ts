import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../shared.scss']
})

export class LoginComponent implements OnInit {
  profileUrl: Observable<string | null>;

  constructor(private  authService: AuthService,
              private storage: AngularFireStorage) {
        const ref = this.storage.ref('public/staerke_assemble0178.png');
        this.profileUrl = ref.getDownloadURL();
        console.log('Test URI: ' + this.profileUrl);
               }

  ngOnInit(): void {


  }

}

