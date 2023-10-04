import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBlogComponent } from './dashboard/edit-blog/edit-blog.component';
import { EditTopicComponent } from './dashboard/edit-topic/edit-topic.component';
import { ProfileComponent } from './profile/profile.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { UserBlogComponent } from './profile/user-blog/user-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs/:userId', component: BlogsComponent },//KULLANICI ID DEĞERİNE GÖRE TÜM BLOGLAR
  { path: 'blog-detail/:blogId', component: BlogDetailComponent },//BLOG ID DEĞERİNE GÖRE GELEN BLOG
  { path: 'login', component: LoginComponent },//LOGIN SAYFASI
  { path: 'profile/:userId', component: ProfileComponent },//PROFILE SAYFASI
  { path: 'profile/:userId/blog-detail/:blogId', component: UserBlogComponent },//KULLANICIN BLOGLARI (BLOG DÜZENLEME SAYFASI)
  { path: 'new-blog', component: NewBlogComponent },//YENİ BLOG
  { path: 'dashboard', component: DashboardComponent },//DAHSBOARD
  { path: 'dashboard/edit-blog', component: EditBlogComponent },//EDIT BLOG
  { path: 'dashboard/edit-topic', component: EditTopicComponent },//EDIT TOPIC
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
