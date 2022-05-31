import { Component } from '@angular/core';
import { AuxStartshipService } from './servicces/aux-startship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auxServ:AuxStartshipService){}

  get logInUser(){
    return this.auxServ.logInUser
  }
  title = 'Spring_8_Tasca';

  started:boolean=false

}
