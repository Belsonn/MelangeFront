import { Component} from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss']
})
export class BackbuttonComponent{

  faLongArrowAltLeft = faLongArrowAltLeft;

  constructor() { }


}
