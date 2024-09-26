import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { LoginUserService } from '../service/loginuser.service'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {

  user: User = new User();


  constructor(private http: HttpClient, private loginService: LoginUserService) { }

  ngOnInit(): void { }

  userLogin() {
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data => {
      alert("Login successful");
    }, error => {
      alert("Error: " + error.message);
    });
  }
}
