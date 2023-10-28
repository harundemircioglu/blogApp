import { Component, OnInit } from '@angular/core';
import { AuthService } from 'core/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  refresh() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.refresh();
  }
}
