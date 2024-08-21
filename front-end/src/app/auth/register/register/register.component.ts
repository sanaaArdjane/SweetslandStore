import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
// users:[]=[]
// newUser="";
username:string
password:string
errorMessage=""
constructor( private authService:AuthService,private router:Router){}
register(){
if (this.authService.register(this.username,this.password)){
  this.router.navigate(['/login'])
}else{
  this.errorMessage='user already exists'
}
}
}
