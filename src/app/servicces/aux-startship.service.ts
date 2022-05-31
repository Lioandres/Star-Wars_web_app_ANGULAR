import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship, ShipList } from '../Interfaces/StarshipResponse.interface';
import { Users } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuxStartshipService {

  constructor(private http:HttpClient) {
    this.userRepository=JSON.parse(localStorage.getItem('users')!)||[]
   }

  _startShipList:Ship[]=[]
  pageInfo=""

  getStarshipList(){
    this.http.get<ShipList>('https://swapi.dev/api/starships')
    .subscribe((resp:ShipList)=>{
    this._startShipList=resp.results
    this.pageInfo=resp.next
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

  showMoreShip() {
    if (this.pageInfo!=null) {
    this.http.get<ShipList>(this.pageInfo)
    .subscribe((resp:ShipList)=>{
    this._startShipList=resp.results
    this.pageInfo=resp.next
    console.log(this._startShipList)
    
    })

  }
  else this.pageInfo='https://swapi.dev/api/starships/?page=1'
}


userRepository:Users[]= [{userName:"",userMail:"",userpassword:""}]

logIn(){
  localStorage.setItem('users',JSON.stringify(this.userRepository))
}


}
