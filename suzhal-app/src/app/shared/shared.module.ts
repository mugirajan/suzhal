import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MainlayoutComponent } from './component/mainlayout/mainlayout.component';


@NgModule({
    declarations: [  
        SidebarComponent,
        NavbarComponent,
        MainlayoutComponent
     ],
    imports: [
        CommonModule,
        FormsModule,
        RouterOutlet,
        RouterLink,
        ReactiveFormsModule,
    ],
    exports: [
        MainlayoutComponent
    ],
    providers: []
})
export class SharedModule { }