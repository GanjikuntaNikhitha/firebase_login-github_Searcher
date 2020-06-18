import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
// getting the properties from user(authState :if there is successfully signin it will do error)
  getUser() {
    return this.auth.authState;
  }
  signOut() {
    return this.auth.signOut();
  }
}
