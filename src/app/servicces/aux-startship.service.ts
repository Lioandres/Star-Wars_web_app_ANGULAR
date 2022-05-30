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

}
