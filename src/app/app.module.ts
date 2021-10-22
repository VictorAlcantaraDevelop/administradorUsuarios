import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { LoginComponent } from './auth/components/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DetalleUsuarioComponent} from './components/detalle-usuario/detalle-usuario.component'
 
@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    LoginComponent,
    DetalleUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
