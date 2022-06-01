import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanLoad, CanActivate } from '@angular/router';
import { StarshipListComponent } from "./starship-list/starship-list.component";
import { ShipComponent } from './ship/ship.component';
import { SignUpComponent } from "./sign-up/sign-up.component";

import { LogInComponent } from "./log-in/log-in.component";
import { AuthGuard } from './servicces/auth.guard';


const appRoutes:Routes=[
 
    // {
    //   path:'',
    //   component:AppComponent,
    //   pathMatch:'full'
    // },
    {
      path:'starshipList',
      component:StarshipListComponent,
      pathMatch:'full',
      canActivate:[AuthGuard],
      //canLoad: [AuthGuard]
    },
    {
      path:'starshipList/ship',
      component:ShipComponent,
      pathMatch:'full',
      canActivate:[AuthGuard],
    },
    {
      path:'signUp',
      component:SignUpComponent,
      pathMatch:'full'
    },
  
    {
      path:'logIn',
      component:LogInComponent,
      pathMatch:'full'
    },
  
    {
      path:'**',
      redirectTo:''
    }
  
  ]

  @NgModule({
    declarations: [
      StarshipListComponent,
      ShipComponent

      
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
      
  })
  export class AppRoutingModule {}