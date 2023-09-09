import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsaddService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  fetchData() {
    const url = 'http://localhost:3000/data/portfolio';
  
    return this.http.get(url);
  }
  postdata(body:any){
    const url = 'http://localhost:3000/data/portfolio';
  
    return this.http.post(url, body);

  }  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something went wrong. Please try again later.');
  }
 
}
