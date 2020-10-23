import { Component, OnInit } from '@angular/core';
import { Melange } from 'src/app/models/melange.model';
import { MelangeService } from '../melange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  melanges : [Melange]
  constructor(private melangeService: MelangeService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.melangeService.getMyMelanges().subscribe(res => {
      this.melanges = res.data.melanges;
      this.isLoading = false;
    })
  }

  onMelangeClick(id) {
    this.router.navigate(['melange', id]);
  }

}
