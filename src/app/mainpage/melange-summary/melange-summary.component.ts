import { Component, OnInit } from '@angular/core';
import { Melange } from 'src/app/models/melange.model';
import { MelangeService } from '../melange.service';

@Component({
  selector: 'app-melange-summary',
  templateUrl: './melange-summary.component.html',
  styleUrls: ['./melange-summary.component.scss']
})
export class MelangeSummaryComponent implements OnInit {

  isLoading = false;
  melange: Melange;

  constructor(private melangeService: MelangeService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.melange = this.melangeService.melange;
    this.isLoading = false;
  }

}
