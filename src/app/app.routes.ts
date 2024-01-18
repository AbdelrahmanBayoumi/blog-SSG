import { Routes } from '@angular/router';
import { BlogsListComponent } from './blogs-list/blogs-list.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogsListComponent,
  },
  {
    path: 'blogs',
    component: BlogsListComponent,
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./blog-post/blog-post.component').then(
        (m) => m.BlogPostComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
