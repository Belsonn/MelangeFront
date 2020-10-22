import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
   isAuthenticated = false;
   authStatus: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.getIsAuthenticated();
    this.authStatus = this.authService
      .getAuthStatus()
      .subscribe((authStatus) => {
        this.isAuthenticated = authStatus;
      });
  }
  onHomeClick() {
    if(this.isAuthenticated){
      this.router.navigate(['home']);
    }
    else {
      this.router.navigate([''])
    }
  }

  onLogout() {
    this.authService.logout();
  }
        ngOnDestroy(): void {
          this.authStatus.unsubscribe();
        }
}
