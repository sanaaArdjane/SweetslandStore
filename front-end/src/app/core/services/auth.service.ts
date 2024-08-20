import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // storing authentication status

  private authKey = 'auth';
  constructor(private router: Router) {}

  // Log in user
  login(username: string, password: string): boolean {

    if (username === 'user' && password === 'password') {
      localStorage.setItem(this.authKey, 'true');
      return true;
    }
    return false;
  }

  // Register new user
  register(username: string, password: string): boolean {
    return true;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authKey);
  }

  // Log out user
  logout(): void {
    localStorage.removeItem(this.authKey);
    this.router.navigate(['/login']);
  }
}
