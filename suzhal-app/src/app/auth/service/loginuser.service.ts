import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService { 
    private baseurl = "http://localhost:8081/user/login";

    constructor(private httpClient: HttpClient) {}

    loginUser(user: User): Observable<object> {
        console.log(user)
        return this.httpClient.post(this.baseurl, user); 
    }
}
