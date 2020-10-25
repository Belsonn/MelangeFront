import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  error: Boolean
}

@Component({
  selector: 'app-modal-create-temp-user',
  templateUrl: './modal-create-temp-user.component.html',
  styleUrls: ['./modal-create-temp-user.component.scss']
})
export class ModalCreateTempUserComponent implements OnInit {
  username: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data : DialogData) { }

  ngOnInit(): void {
  }

}