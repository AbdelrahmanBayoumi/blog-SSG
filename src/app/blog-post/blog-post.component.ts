import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent implements OnInit {
  blog!: BlogPost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blog = this.route.snapshot.data['blog'];
  }
}
