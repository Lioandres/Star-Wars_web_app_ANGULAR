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


  this.observable = new Observable (subscriber => {
    subscriber.next();
    subscriber.complete()  
  });


}


  id:any=0
  source:string=""
  get ship(){
    return this.auxServ.ship
  }


showPilots(){
  console.log('just before subscribe');
this.observable.subscribe({
  next:()=> this.auxServ.getPilots(),
  error:(err:any)=>console.error('something wrong occurred: ' + err),
  complete: ()=> console.log(this.auxServ.pilots),
});
console.log('just after subscribe');


}

}

