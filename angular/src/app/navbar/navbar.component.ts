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
    this.authService.isLoggedIn().subscribe(response => {
      this.isLoggedIn = true;
      this.authService.getCurrentUser().subscribe(response => {
        this.currentUser = response;
        console.log(this.currentUser);
      })
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.refresh();
  }
}
