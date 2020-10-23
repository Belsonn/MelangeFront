import { MelangeService } from './../melange.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-melange-create',
  templateUrl: './melange-create.component.html',
  styleUrls: ['./melange-create.component.scss'],
})
export class MelangeCreateComponent implements OnInit, OnDestroy {
  isLoading = false;
  error: boolean = false;
  private errorStatus: Subscription;

  constructor(private melangeService: MelangeService) {}

  ngOnInit(): void {
    this.errorStatus = this.melangeService
      .getErrorStatus()
      .subscribe((errorStatus) => {
        this.error = errorStatus;
      });
  }
  onCreate(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.melangeService.createMelange(form.value.name);
  }

  ngOnDestroy() {
    this.errorStatus.unsubscribe();
  }
}
