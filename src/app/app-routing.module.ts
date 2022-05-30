import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StarshipListComponent } from "./starship-list/starship-list.component";
import { ShipComponent } from './ship/ship.component';


const appRoutes:Routes=[
 
    // {
    //   path:'',
    //   component:AppComponent,
    //   pathMatch:'full'
    // },
    {
      path:'starshipList',
      component:StarshipListComponent,
      pathMatch:'full'
    },
    {
      path:'starshipList/ship',
      component:ShipComponent,
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