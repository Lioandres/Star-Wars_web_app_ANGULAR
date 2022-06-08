import { Component, OnInit } from '@angular/core';
import { AuxStartshipService } from '../servicces/aux-startship.service';


@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  constructor(private auxServ:AuxStartshipService) { }


  pilotShip:string[]=[]

ngOnInit(  ): void   {
  let numberShip:any=this.ship?.url.match(/\d+/g)
  this.id=numberShip[0]
  console.log(this.id)
  this.source=`https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
  console.log(this.source, 'numero jpb:',this.id,'tipo:',typeof(this.source))
  this.pilotShip=[]
  this.error=false
 
}


id:any=0
source:string=""
error:boolean=false

get ship(){
    return this.auxServ.ship
  }


showPilotsToggle:boolean=false

showPilots(){
 this.auxServ.showPilots()
 this.pilotShip=this.auxServ.pilotNames
}

handleMissingImage(event:Event){
   (event.target as HTMLImageElement).src='assets/img/tenor.gif'
}

}

