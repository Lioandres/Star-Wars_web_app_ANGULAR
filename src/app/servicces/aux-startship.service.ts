import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship, ShipList } from '../Interfaces/StarshipResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuxStartshipService {

  constructor(private http:HttpClient) { }

  _startShipList:Ship[]=[]

  getStarshipList(){
    this.http.get<ShipList>('https://swapi.dev/api/starships')
    .subscribe((resp:ShipList)=>{
    this._startShipList=resp.results
    console.log(this._startShipList)
    
    })

  }

  get startShipList(){
    return [...this._startShipList]
  }

_ship:Ship|undefined={
  name:                  "",
  model:                 "",
  manufacturer:          "",
  cost_in_credits:       "",
  length:                "",
  max_atmosphering_speed:"",
  crew:                  "",
  passengers:            "",
  cargo_capacity:        "",
  consumables:           "",
  hyperdrive_rating:     "",
  MGLT:                  "",
  starship_class:        "",
  pilots:                 [],
  films:                  [],
  created:                new Date,
  edited:                new Date,
  url:                   "",
}

  showShipAux(argument:string) {
   this._ship= this._startShipList.find(ship=>ship.name===argument)
  }


  get ship(){
    return this._ship
  }

  getShipImg(id:number){
    this.http.get<ShipList>(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
    .subscribe((resp:ShipList)=>{
    this._startShipList=resp.results
    console.log(this._startShipList)
    
    })

  }

}
