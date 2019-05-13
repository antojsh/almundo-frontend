import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // Define API
  apiURL = environment.api
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API get() method => Fetch hotels list
  getHotels(params = null): Observable<any> {
    return this.http.get<any>(this.apiURL + '/hotels' + this.convertJsonToParamas(params))
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  private convertJsonToParamas(json) {
    return json ? '?' + Object.keys(json).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(json[k])
    }).join('&') : ''
  }
}