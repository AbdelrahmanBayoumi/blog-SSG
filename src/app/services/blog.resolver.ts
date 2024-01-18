import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { BlogsService } from './blogs.service';

@Injectable({
  providedIn: 'root',
})
export class BlogResolver implements Resolve<BlogPost> {
  constructor(private readonly blogService: BlogsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BlogPost> {
    const id = route.params['id'] as number;
    return this.blogService.getBlogPostById(id);
  }
}
