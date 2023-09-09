import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() {}

  protected getApiUrl(endpoint: string): string {
      return `${environment.apiBaseUrl}/${endpoint}`;
  }
}
