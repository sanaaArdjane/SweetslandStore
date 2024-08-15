import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
// defining canActivate route nto ensure that only authenticated users can see the details of a product
export class authGuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean  {
    //  authentication check using localStorage
    const isAuthenticated = !!localStorage.getItem('auth');

    if (!isAuthenticated) {
      // go back to login if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
