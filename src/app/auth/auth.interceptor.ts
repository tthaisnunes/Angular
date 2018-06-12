import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if (localStorage.getItem('token') != null) {
      const authRequestToken = request.clone({setHeaders: {
        'Content-Type': 'application/json',
        'token' : token
      }});
      return next.handle(authRequestToken);
    } else {
      return next.handle(request);
    }
  }
}
