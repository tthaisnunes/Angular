import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/api/api.service';
import { Observable } from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME = 'jwt_token';

@Injectable()
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private _api: ApiService
  ) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  login(user): Observable<any> {
    return this.httpClient.post(this._api.resquest(this._api.endPoints.auth.login), JSON.stringify(user));
  }

  logout() {
    return this.httpClient.post(this._api.resquest(this._api.endPoints.auth.logout), '');
  }
}
