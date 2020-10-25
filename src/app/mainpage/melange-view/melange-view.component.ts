import { Component, OnInit } from '@angular/core';
import { Melange } from 'src/app/models/melange.model';
import { MelangeService } from '../melange.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateTempUserComponent } from './../../common/modal-create-temp-user/modal-create-temp-user.component';

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
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.melangeService.getMelange(this.id).subscribe((res) => {
      this.melange = res.data.melange;
      this.isLoading = false;
    });
  }

  openDialog(error) {
    console.log(!error);
    let dialogRef = this.dialog.open(ModalCreateTempUserComponent, {
      data: {
        error: error,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading = true;
        this.melangeService.createTempUser(this.melange._id, result).subscribe(
          (res) => {
            this.ngOnInit();
          },
          (err) => {
            this.isLoading = false;
            this.openDialog(true);
          }
        );
      }
    });
  }
}