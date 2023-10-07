import { Component, OnInit } from '@angular/core';
import { User } from 'core/models/user.model';
import { AuthService } from 'core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isLoggedIn = false;

  currentUser: User | null = null;

  refresh() {
    if (this.authService.isAuthenticated()) {
      this.isLoggedIn = true;
      this.currentUser = this.authService.getUser();
      console.log(this.currentUser);
    }
    else {
      this.isLoggedIn = false;
      this.currentUser = null;
    }
  }

  logout() {
    this.authService.logout().subscribe(response => {
      this.router.navigate(['/']);
      this.isLoggedIn = false;
      this.currentUser = null;
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
