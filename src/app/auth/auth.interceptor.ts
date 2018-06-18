import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.auth.isTokenExpired();

    if (token) {
      const loggedRequest = request.clone({setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      }});
      return next.handle(loggedRequest);
    } else {
      const notLoggedRequest = request.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
      return next.handle(notLoggedRequest);
    }
  }
}
