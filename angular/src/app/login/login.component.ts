import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LoginRequest } from 'core/models/request/login-request.model';
import { RegisterRequest } from 'core/models/request/register-request.model';
import { Router } from '@angular/router';
import { AuthService } from 'core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService
  ) { }

  loginRequest: LoginRequest = <LoginRequest>{};

  registerRequest: RegisterRequest = <RegisterRequest>{};

  login() {
    this.authService.login(this.loginRequest).subscribe(response => {
      if (response.status == 200) {
        this.router.navigate(['/']);
      }
    })
  }

  register() {
    this.authService.register(this.registerRequest).subscribe(response => {
      if (response.status == 200) {
        this.router.navigate(['/']);
      }
    })
  }

  ngAfterViewInit() {
    // HTML'den gerekli öğeleri alma
    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');
    const container = this.el.nativeElement.querySelector('#container');

    // Olay dinleyicilerini eklemek için TypeScript kullanımı
    signUpButton.addEventListener('click', () => {
      this.renderer.addClass(container, 'right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      this.renderer.removeClass(container, 'right-panel-active');
    });
  }
}
