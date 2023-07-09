import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blogs/blog-page/blog-page.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { PostComponent } from './blogs/post/post.component';
import { AdminblogComponent } from './adminblog/adminblog.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'blog/my-best-blog',
    component: PostComponent,
  },
  {
    path: 'admin/blog',
    component: AdminblogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
