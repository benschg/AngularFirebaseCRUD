import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { VideoService } from './video.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../shared.scss']
})

export class LoginComponent implements OnInit {
  profileUrl: Observable<string | null>;
  videoUrl: string;
  ideoData = true;

  constructor(private  authService: AuthService,
              private storage: AngularFireStorage) {

               }

  ngOnInit(): void {
    // const ref = this.storage.ref('public/StaerkeSchmiede_ParticlesAssemble0001-0200.mp4');
    // ref.getDownloadURL().toPromise().then(x => this.profileUrl = x);
    // this.profileUrl.subscribe(a => { console.log("internal "  + a);  });
    // console.log('Test URI: ' + this.profileUrl);
    // required direct URI as assigning at runtime does not work... yeah!
    this.videoUrl = 'https://firebasestorage.googleapis.com/v0/b/staerkensache.appspot.com/o/public%2FStaerkeSchmiede_ParticlesAssemble0001-0200.mp4?alt=media';

  }

}

