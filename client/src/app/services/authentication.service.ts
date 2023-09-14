import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, authState } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = this.afAuth.authState;

  constructor(public auth: Auth, public afAuth: AngularFireAuth) { }

   
async login(username: string, password: string): Promise<boolean> {
  try {
    await this.afAuth.signInWithEmailAndPassword(username, password);
    return true; // Authentication successful
  } catch (error) {
    console.error('Authentication failed: ', error);
    return false; // Authentication failed
  }
}

/* 
  login(username: string, password: string){
    return from (signInWithEmailAndPassword(this.auth, username, password)); //returns an obersable
   } */

   logout(){
    return from(this.auth.signOut());
   }

}
