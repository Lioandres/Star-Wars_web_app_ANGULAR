import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxStartshipService } from '../servicces/aux-startship.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  constructor(private auxServ:AuxStartshipService) { }

  observable:any

  ngOnInit(  ): void   {

  let numberShip:any=this.ship?.url.match(/\d+/g)
  this.id=numberShip[0]
  console.log(this.id)
  this.source=`https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
  console.log(this.source)
  typeof(this.source)
}

  id:any=0
  source:string=""
get ship(){
    return this.auxServ.ship
  }

showPilots(){
  this.auxServ.showPilots()
}

get pilotNames(){
 return this.auxServ.pilotNames
}




}

