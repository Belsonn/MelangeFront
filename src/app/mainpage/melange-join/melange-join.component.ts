import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MelangeService } from '../melange.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-melange-join',
  templateUrl: './melange-join.component.html',
  styleUrls: ['./melange-join.component.scss']
})
export class MelangeJoinComponent implements OnInit, OnDestroy {

  private errorStatus: Subscription;
  error : boolean = false;

  constructor(private melangeService: MelangeService, private router: Router) { }

  ngOnInit(): void {
    this.errorStatus = this.melangeService
      .getErrorStatus()
      .subscribe((errorStatus) => {
        this.error = errorStatus;
      });
  }

  onJoin(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.melangeService.joinMelange(form.value.token);
  }
  ngOnDestroy() {
    this.errorStatus.unsubscribe();
  }
}
