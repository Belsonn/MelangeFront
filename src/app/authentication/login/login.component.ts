import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  error = false;
  private authStatus: Subscription;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.getAuthStatus().subscribe(authStatus => {
      this.isLoading = false;
      this.error = !authStatus;
    });
    if (this.authService.getAuthStatus()){
      this.router.navigate(['home']);
    }
  }

  onLogin(form: NgForm) {
    if (form.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.authStatus.unsubscribe();
  }

}
