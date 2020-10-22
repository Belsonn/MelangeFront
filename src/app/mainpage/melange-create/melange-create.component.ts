import { MelangeService } from './../melange.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-melange-create',
  templateUrl: './melange-create.component.html',
  styleUrls: ['./melange-create.component.scss']
})
export class MelangeCreateComponent implements OnInit {

  isLoading = false;

  constructor(private router: Router, private melangeService: MelangeService) { }

  ngOnInit(): void {
  }
  onCreate(form:NgForm) {
    if(form.invalid) {
      return;
    }
    this.melangeService.createMelange(form.value.name);
  }
}
