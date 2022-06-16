import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route.animations';
import { AuxStartshipService } from './servicces/aux-startship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    fader,
    //slider,
    //transformer,
    //stepper
  ]
})
export class AppComponent {

  constructor(private auxServ:AuxStartshipService){}

  get logInUser(){
    return this.auxServ.logInUser
  }

  get loggedIn(){
    return this.auxServ.loggedIn
  }

  logOut(){
    this.auxServ.logOut()
  }

  showNotice(){
    this.auxServ.showNotice()
  }

  title = 'Spring_8_Tasca';

  started:boolean=false

  prepareRoute(outlet :RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
