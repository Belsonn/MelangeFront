import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthResponse } from './../models/authResponse.model';
import { Subject } from 'rxjs';
import { UserModelResponse } from './../models/user.model';
import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private userId: string;
  private userName: string;
  private authStatus = new Subject<boolean>();

  getUserName() {
    return this.userName;
  }
  getToken() {
    return this.token;
  }
  getIsAuthenticated() {
    return this.isAuthenticated;
  }
  getUserId() {
    return this.userId;
  }
  getAuthStatus() {
    return this.authStatus.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  onAuth(response: AuthResponse) {
    this.token = response.token;
    if (response.token) {
      this.userName = response.data.user.name;
      this.userId = response.data.user._id;
      this.isAuthenticated = true;
      this.authStatus.next(true);
      this.saveAuthData(response.token, response.expiresIn);
      this.router.navigate(['/home']);
    }
  }

  autoAuth() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }
    const now = new Date();
    const expires = authInfo.expirationDate.getTime() - now.getTime();
    if (expires > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.authStatus.next(true);
      this.getMe().subscribe((res) => {
        this.userName = res.data.user.name;
        this.userId = res.data.user._id;
        this.router.navigate(['/home']);
      });
    }
  }

  signup(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    const newUser = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    return this.http.post<AuthResponse>(
      `${environment.apiURL}users/signup`,
      newUser
    );
  }

  activateAccount(token:string){
    return this.http.post<AuthResponse>(`${environment.apiURL}users/activate`, {activationToken: token})
  }

  login(email: string, password: string) {
    const User = { email: email, password: password };
    this.http
      .post<AuthResponse>(`${environment.apiURL}users/login`, User)
      .subscribe(
        (res) => {
          this.onAuth(res);
        },
        (err) => {
          this.authStatus.next(false);
        }
      );
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatus.next(false);
    this.userId = null;
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  getMe() {
    return this.http.get<UserModelResponse>(`${environment.apiURL}users/me`);
  }

  private saveAuthData(token: string, expirationDate: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
}