import { Component } from '@angular/core';
import { LoginUserService } from '../service/loginuser.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';

  constructor(private authService: LoginUserService,private fb: FormBuilder, private router: Router) {
  }

  userLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        alert('Login successful');
        console.log('Logged in:', response);
      },
      (error) => {
        alert('Login failed');
        console.error('Login error:', error);
      }
    );
  }
}
