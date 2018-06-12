import { Injectable, Inject, InjectionToken } from '@angular/core';
import { EndPoints } from './api.d';
import { environment } from '../../../environments/environment';

export const ENDPOINTS = new InjectionToken('ENDPOINTS');

@Injectable()
export class ApiService {
  private readonly _baseUrl = environment.BASE_URL;
  endPoints: EndPoints;

  constructor(
    @Inject(ENDPOINTS) private _endPoints
  ) {
    this.endPoints = _endPoints.reduce((acc, current) => {
      /**
       * Reduce the path URL API with the strings and return the value.
       */
      return current;
    }, {});
  }

  resquest(url: string) {
    /**
     * Receives the url and put the default path url from environments file.
     */
    return `${this._baseUrl}${url}`;
  }
}
