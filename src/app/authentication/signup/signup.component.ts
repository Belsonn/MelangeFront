import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {AuthService} from './../auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  password: string = "";
  passwordConfirm: string = "";
  passwordMatch = true;
  error = false;
  private authStatus: Subscription

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.getAuthStatus().subscribe(authStatus => {
      this.password = "";
      this.passwordConfirm = "";
      this.error = !authStatus
      this.isLoading = false;
    })
    if(this.authService.getAuthStatus()){
      this.router.navigate(['home']);
    }
  }

  onSignup(form: NgForm) {
    if(!form.valid)
    {
      return;
    }
    if(this.password !== this.passwordConfirm) {
      this.passwordMatch = false;
      console.log(this.passwordMatch)
      return;
    }
    this.isLoading = true;
    this.authService.signup(form.value.username, form.value.email, form.value.password, form.value.passwordConfirm)
  }

  resetMatch(){
    this.passwordMatch = true;
  }

  ngOnDestroy() {
    this.authStatus.unsubscribe();
  }

}
