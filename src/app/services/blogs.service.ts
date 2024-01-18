import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getBlogPostById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }
}
