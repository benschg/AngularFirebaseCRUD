// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {
    this.firebaseAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
         value.user.sendEmailVerification();
      })

      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  async sendEmailVerification() {
    await (await this.firebaseAuth.currentUser).sendEmailVerification();
    this.router.navigate(['admin/verify-email']);
}

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        if (value.user.emailVerified) {
        console.log('Nice, it worked!');
        }
        else {
          throw new Error('Email is not verified yet.');
        }
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail);
 }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);

  }

  get isLoggedIn(): boolean {
    const user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
}