import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StarshipListComponent } from "./starship-list/starship-list.component";


const appRoutes:Routes=[
 
    // {
    //   path:'',
    //   component:AppComponent,
    //   pathMatch:'full'
    // },
    {
      path:'starship',
      component:StarshipListComponent,
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