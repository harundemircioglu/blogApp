import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBlogComponent } from './dashboard/edit-blog/edit-blog.component';
import { EditTopicComponent } from './dashboard/edit-topic/edit-topic.component';
import { ProfileComponent } from './profile/profile.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { UserBlogComponent } from './profile/user-blog/user-blog.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    BlogDetailComponent,
    LoginComponent,
    DashboardComponent,
    EditBlogComponent,
    EditTopicComponent,
    ProfileComponent,
    NewBlogComponent,
    UserBlogComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
