import { Component, OnInit } from '@angular/core';
import { AuxStartshipService } from '../servicces/aux-startship.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

  constructor(private auxServ:AuxStartshipService) { }

  ngOnInit(): void {
    this.auxServ.getStarshipList()    
  }


  get startShipList(){
    return this.auxServ.startShipList
  }


  showShip(argument:string){
   this.auxServ.showShipAux(argument)
  }

  showMoreShip(){
    this.auxServ.showMoreShip()
  }

 

  
  

  

}
