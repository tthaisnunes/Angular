// Dependencies
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ENDPOINTS } from '../core/api/api.service';
import { api } from '../core/api/api';
import { ApiService } from './api/api.service';

// Create a provide with the name 'ENDPOINTS' and put the value of string API with 'useValue'
const AUTH_API = { provide: ENDPOINTS, multi: true, useValue: api };

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    ApiService,
    AUTH_API
  ]
})
export class CoreModule { }
