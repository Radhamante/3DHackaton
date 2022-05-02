import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../entities/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authEvent = new BehaviorSubject<boolean>(false);

  constructor(private httpclient: HttpClient) {}

  login(value: object): Observable<string> {
    return this.httpclient.post<string>(
      'http://localhost:8080/login',
      value
    );
  }

  register(value: object): Observable<any> {
    return this.httpclient.post('http://localhost:8080/register', value);
  }

  emitAuthStatus(state: boolean): void {
    this.authEvent.next(state);
  }

  getCurrentUser(): Observable<User> {
    const user = this.httpclient.get<User>(
      'http://localhost:8080/users/current'
    );
    user.subscribe((us) => {
      if (us != null) {
        sessionStorage.setItem('userid', String(us.id));
      }
    });
    return user;
  }

  authListener(): Observable<any> {
    let isConnected = false;
    this.getCurrentUser().subscribe((user) => {
      if (user && user.id) {
        isConnected = true;
      }
      this.emitAuthStatus(isConnected);
    });
    return this.authEvent.asObservable();
  }

  logout(): void {
    this.httpclient
      .post<any>('http://localhost:8080/logout', '')
      .subscribe(() => {
        sessionStorage.setItem('isConnected', 'false');
        sessionStorage.removeItem('userid');
        this.emitAuthStatus(false);
      });
  }

}
