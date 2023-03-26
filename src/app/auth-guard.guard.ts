import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

// Imports dependency to authenticate user.
constructor(private afAuth: AngularFireAuth) {}

  // canActivate function is implemented.
  // Returns true or false depending of the login state of the user.
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    // Wait for the state of the user.
    const user = await this.afAuth.currentUser
    // Converts to a boolean with double negation !!.
    const isLoggedIn = !!user

    // Return the value.
    return isLoggedIn;
  }

}
