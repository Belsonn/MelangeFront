import { Component, OnInit } from '@angular/core';
import { Melange } from 'src/app/models/melange.model';
import { MelangeService } from '../melange.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-melange-view',
  templateUrl: './melange-view.component.html',
  styleUrls: ['./melange-view.component.scss'],
})
export class MelangeViewComponent implements OnInit {
  melange: Melange;
  id: string;
  isLoading = false;

  constructor(
    private melangeService: MelangeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.melangeService.getMelange(this.id).subscribe((res) => {
      this.melange = res.data.melange;
      this.melangeService.melange = res.data.melange;
      this.isLoading = false;
    });
  }
}
