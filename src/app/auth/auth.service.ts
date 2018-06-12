import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../core/api/api.service';

@Injectable()
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private _api: ApiService
  ) { }

  // methods of auth service
}

