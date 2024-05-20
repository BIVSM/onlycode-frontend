import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../../models/base-url";
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/login/`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/register/`, user);
  }

  profile(): Observable<any> {
    return this.http.get(`${baseUrl}/api/auth/profile/`);
  }
}
