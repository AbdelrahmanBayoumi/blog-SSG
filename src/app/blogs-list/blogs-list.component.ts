import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.scss',
})
export class BlogsListComponent {
  blogs$ = this.blogService.getBlogPosts();

  constructor(private readonly blogService: BlogsService) {}
}
