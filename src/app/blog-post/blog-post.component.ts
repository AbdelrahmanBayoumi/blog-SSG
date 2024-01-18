import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent implements OnInit {
  blog: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService
  ) {}

  ngOnInit(): void {
    /**
     * this.blogService.getBlogPostById(id).subscribe((blog) => {
        this.blog = blog;
      });
     */

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.blogService.getBlogPostById(id).subscribe((blog) => {
        this.blog = blog;
      });
    });
  }
}
