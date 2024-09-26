import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth.routing.module';
import { provideRouter, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    AuthRoutingModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [provideHttpClient(),
    provideRouter(routes, withComponentInputBinding())
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ]
})
export class AuthModule {}
