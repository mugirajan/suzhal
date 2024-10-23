import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { LoginUserService } from '../service/loginuser.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  user: User = new User('', '', false); 

  constructor(private LoginUserService: LoginUserService) {}

  register() {
    this.LoginUserService.register(this.user).subscribe(
      (response) => {
        console.log('Registration successful', response);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
