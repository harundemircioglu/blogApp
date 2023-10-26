import { Component, OnInit } from '@angular/core';
import { BlogService } from 'core/services/api/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private blogService: BlogService
  ) { }

  blogs: any[] = [];

  refresh() {
    this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data;
    });
  }

  ngOnInit() {
    this.refresh();
  }
}
