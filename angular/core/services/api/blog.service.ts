import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get(this.apiUrl);
  }

  getBlogById(blogId: number): Observable<any> {
    const url = `${this.apiUrl}/${blogId}`;
    return this.http.get(url);
  }
}
