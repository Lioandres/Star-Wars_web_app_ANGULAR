import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuxStartshipService } from './aux-startship.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private auxServ: AuxStartshipService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auxServ.loggedIn) {

      console.log('canActivate', true)
      console.log('logeado:',this.auxServ.loggedIn)
      

      return true
    }
    else {
      console.log('canActivate', false)
      console.log('logeado:',this.auxServ.loggedIn)
      return false
    };
  }












  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    console.log('canLoad', false)
    console.log(route)
    console.log(segments)

    return false;
  }
}
