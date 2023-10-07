import { Component, OnInit } from '@angular/core';
import { AuthService } from 'core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  refresh() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.refresh();
  }
}
