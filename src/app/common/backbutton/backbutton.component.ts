import { Component} from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss']
})
export class BackbuttonComponent{

  faArrowLeft = faArrowLeft;

  constructor() { }


}