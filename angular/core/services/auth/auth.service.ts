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

  login(requestData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, requestData).pipe(
      tap((response: any) => {
        // Giriş başarılıysa kullanıcı bilgilerini saklayabilirsiniz
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  register(requestData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, requestData).pipe(
      tap((response: any) => {
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('user');
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
