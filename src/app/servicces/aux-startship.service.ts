import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuxStartshipService {

  constructor(private http:HttpClient) { }

  _startShipList:{}[]=[]

  getStarshipList(){
    this.http.get('https://swapi.dev/api/starships')
    .subscribe((resp:any)=>{
    this._startShipList=resp.results 
     console.log(this._startShipList)
    })

  }

  get startShipList(){
    return this._startShipList
  }

}
