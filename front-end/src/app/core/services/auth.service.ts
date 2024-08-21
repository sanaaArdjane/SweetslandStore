import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

// Storing authentication status
  private authKey = 'auth';
  private usersK="users"
  constructor(private router: Router) {
  }

// Log in user
  login(username: string, password: string): boolean {
    //getting and transformin gthe users in localStorage to an array
    const users=JSON.parse(localStorage.getItem(this.usersK)|| '[]');

    //checking if the user is found in localStorage
    const user = users.find((user) => user.username === username && user.password === password);

    // if (users.username === 'username' && user.password === 'password') {
    if(user){
      localStorage.setItem(this.authKey, 'true');
      return true;
    }
    return false;
  }
// Register new user
  register(username: string, password: string): boolean {
     //getting and transformin gthe users in localStorage to an array
     const users=JSON.parse(localStorage.getItem(this.usersK)|| '[]');

     //checking if user exists if not push it to localStorage
     const userExist=users.some((user)=>username===username)
     if(!userExist){
      users.push({username,password});
      localStorage.setItem(this.usersK,JSON.stringify(users))

    return true;
  }return false;}
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
