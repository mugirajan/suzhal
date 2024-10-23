// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; 
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MainlayoutComponent } from './shared/component/mainlayout/mainlayout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignUpComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
  ,
  {
    path: 'Home',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/pages.mdoule').then(m => m.PagesModule)
      }
    ]
  }, 
];
