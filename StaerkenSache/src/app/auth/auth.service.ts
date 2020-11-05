import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(
    private afs: AngularFirestore, // Inject Firestore service
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        // this.user = user;
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
  async sendEmailVerification(): Promise<void> {
    await (await this.firebaseAuth.currentUser).sendEmailVerification();
    this.router.navigate(['admin/verify-email']);
  }

  async login(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        if (value.user.emailVerified) {
          this.SetUserData(value.user);
          this.router.navigate(['/user-portal']);
        }
        else {
          this.router.navigate(['/auth/verify-email']);
          throw new Error('Email is not verified yet.');
        }
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }



  // Sign in with email/password
  SignIn(email, password): any {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/user-portal']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign in with Google
  GoogleAuth(): void {
    window.alert('Google authentication not yet implemented');
    // return this.AuthLogin(new .GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider): Promise<void> {
    return this.firebaseAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['user-portal']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: firebase.User) {
    if (user !== undefined) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        initials: user.email.substr(0, 2).toUpperCase(),
      };
      this.user = userData;
      return userRef.set(userData, {
        merge: true
      });
    }
    else {
      this.user = undefined;
      localStorage.removeItem('user');
      return null;
    }
  }


  async sendPasswordResetEmail(passwordResetEmail: string): Promise<void> {
    return await this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail);
  }



  async SignOut() {
    return this.firebaseAuth.signOut().then(() => {
      this.SetUserData(undefined);
      this.router.navigate(['/auth/login']);
    });

  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}