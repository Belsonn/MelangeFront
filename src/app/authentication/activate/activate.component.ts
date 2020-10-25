import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit {
  token: string
  constructor(private route:ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    this.authService.activateAccount(this.token).subscribe(res =>{
      this.authService.onAuth(res);
    }, err => {
      this.router.navigate(['/']);
    })
  }

}
