import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './shared/component/mainlayout/mainlayout.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page/pages.mdoule').then(m => m.PagesModule)
      }
    ]
  }, 
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}