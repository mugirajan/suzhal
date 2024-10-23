import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketstatusComponent } from './ticketstatus/ticketstatus.component';
import { RegionComponent } from './region/region.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "Home"
  },
  {
    path: "Home",
    component: HomepageComponent
  }
  ,
  {
    path: "Ticket-Status",
    component: TicketstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    
  
    RegionComponent
  ]
})
export class PagesRoutingModule { }