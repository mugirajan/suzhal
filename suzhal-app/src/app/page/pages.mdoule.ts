import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages.routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketstatusComponent } from './ticketstatus/ticketstatus.component';
import { RegionComponent } from './region/region.component';

@NgModule({
    declarations: [  
        HomepageComponent,
        TicketstatusComponent,
        RegionComponent
     ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterOutlet,
        RouterLink,
        PagesRoutingModule,
        RouterOutlet,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        
    ],
    exports: [
    ],
    providers: []
})
export class PagesModule { }