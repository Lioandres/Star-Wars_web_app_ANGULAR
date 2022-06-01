import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ship, ShipList } from '../Interfaces/StarshipResponse.interface';
import { Users } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuxStartshipService {
  constructor(private http: HttpClient,
              private route: Router) {
    this._userRepository = JSON.parse(localStorage.getItem('users')!) || [];
  }

  _startShipList: Ship[] = [];
  pageInfo = '';

  getStarshipList() {
    this.http
      .get<ShipList>('https://swapi.dev/api/starships')
      .subscribe((resp: ShipList) => {
        this._startShipList = resp.results;
        this.pageInfo = resp.next;
        console.log(this._startShipList);
      });
  }

  get startShipList() {
    return [...this._startShipList];
  }

  _ship: Ship | undefined = {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: new Date(),
    edited: new Date(),
    url: '',
  };

  showShipAux(argument: string) {
    this._ship = this._startShipList.find((ship) => ship.name === argument);
  }

  get ship() {
    return this._ship;
  }

  showMoreShip() {
    if (this.pageInfo != null) {
      this.http.get<ShipList>(this.pageInfo).subscribe((resp: ShipList) => {
        this._startShipList = resp.results;
        this.pageInfo = resp.next;
        console.log(this._startShipList);
      });
    } else this.pageInfo = 'https://swapi.dev/api/starships/?page=1';
  }

  _userRepository: Users[] = [{ userName: '', userMail: '', userpassword: '' }];

  get userRepository() {
    return [...this._userRepository];
  }

  _logInUser:string='LOG IN'
  _loggedIn:boolean=false

  get logInUser():string{
    return this._logInUser
  }

  get loggedIn():boolean{
    return this._loggedIn
  }

  signUp(userInput: Users) {
    if (
      !this._userRepository.find((user) => user.userName === userInput.userName) &&
      !this._userRepository.find((user) => user.userMail === userInput.userMail)
    ) {
      this._userRepository.push(userInput);
      localStorage.setItem('users', JSON.stringify(this._userRepository));
      this.route.navigate(['logIn'])
      //this._logInUser=`Bienvenido ${userInput.userName}`
    } else alert('el mail o usiario ya existen');
  }
  
  logIn(name:string,password:string) {
    
    if (
      this._userRepository.find((user) => user.userName === name) &&
      this._userRepository.find((user) => user.userpassword === password)
    ) {
      this.route.navigate(['starshipList'])
      this._logInUser=`Bienvenido ${name}-LOG OUT`
      this._loggedIn=true
    } else alert('el mail o usiario es incorrecto');
  }

  logOut() {
    if(this.loggedIn===true){
      this._logInUser='LOG IN'
      this._loggedIn=false
      console.log('logeado:', false)
    }
  }


}
