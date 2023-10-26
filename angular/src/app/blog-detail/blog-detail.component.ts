import { Component, OnInit } from '@angular/core';
import { BlogService } from 'core/services/api/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute
  ) { }

  blogs: any[] = [];

  blogId: number = 0;

  blog: any;

  ngOnInit() {
    this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data;
    });

    this.activatedRoute.params.subscribe(blog => {
      this.blogId = +blog['blogId'];

      this.blogService.getBlogById(this.blogId).subscribe(response => {
        this.blog = response;
        console.log(this.blog);
      })

    })
  }
}
