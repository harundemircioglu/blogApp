import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEntity(entity: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${entity}`);
  }

  getEntityById(entity: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${entity}/${id}`);
  }

  createEntity(entity: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${entity}`, data);
  }

  updateEntity(entity: string, id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${entity}/${id}`, data);
  }

  deleteEntity(entity: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${entity}/${id}`);
  }
}
