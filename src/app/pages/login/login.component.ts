import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../models/authentication-request';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { TokenService } from '../../services/token/token.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
  }

  /*login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }*/

    login() {
      this.errorMsg = [];
      this.authService.authenticate({
        body: this.authRequest
      }).subscribe({
        next: (res) => {
          this.tokenService.token = res.token as string;
          this.router.navigate(['books']);
        },
        error: (err) => {
          console.log(err);
          if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else if (err.status === 401 && err.error.error === 'Unauthorized') {
            this.errorMsg.push('Bad credentials. Please check your email and password.');
          } else {
            this.errorMsg.push('An unexpected error occurred. Please try again later.');
          }
        }
      });
    }

  register() {
    this.router.navigate(['register']);
  }
}
