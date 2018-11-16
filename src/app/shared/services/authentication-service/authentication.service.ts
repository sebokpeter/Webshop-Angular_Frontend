import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = "https://ipcsmmd-webshop-group16.azurewebsites.net/api/token";
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, {username, password})
    .pipe(map(response => {
      const token = response && response.token;
      // Login successfull if there is a token in the response
      if(token) {
        // Store username and token in the local storage
        localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
        return true;
      }
      else {
        return false;
      }
    }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
