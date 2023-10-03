import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.apiUrl; // API URL'ini buraya ekleyin

  constructor(private http: HttpClient) { }

  private loggedIn = new BehaviorSubject<boolean>(this.checkToken());

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (response.user) {
          localStorage.setItem('token', response.access_token);
          this.loggedIn.next(true);
        }
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, userData);
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    return this.http.post<any>(`${this.baseUrl}/logout`, {});
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private checkToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
