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
  pilotShip:string[]=[]
  ngOnInit(  ): void   {

  let numberShip:any=this.ship?.url.match(/\d+/g)
  this.id=numberShip[0]
  console.log(this.id)
  this.source=`https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
  console.log(this.source)
  typeof(this.source)

  this.pilotShip=[]
}

  id:any=0
  source:string=""


  get ship(){
    return this.auxServ.ship
  }


showPilotsToggle:boolean=false
showPilots(){
 this.auxServ.showPilots()
 this.pilotShip=this.auxServ.pilotNames
}






}

