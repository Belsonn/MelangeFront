import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isLoading = false;
  password: string = '';
  passwordConfirm: string = '';
  passwordMatch = true;
  error = false;
  info = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.getIsAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

  onSignup(form: NgForm) {
    this.error = false;
    this.info = false;
    if (!form.valid) {
      return;
    }
    if (this.password !== this.passwordConfirm) {
      this.passwordMatch = false;
      return;
    }
    this.isLoading = true;
    this.authService.signup(
      form.value.username,
      form.value.email,
      form.value.password,
      form.value.passwordConfirm
    ).subscribe(res => {
      this.password = '';
      this.passwordConfirm = '';
      this.info = true;
      this.isLoading = false;
    }, err => {
      this.password = '';
      this.passwordConfirm = '';
      this.error = true;
      this.isLoading = false;
    });
  }

  resetMatch() {
    this.passwordMatch = true;
  }

}
