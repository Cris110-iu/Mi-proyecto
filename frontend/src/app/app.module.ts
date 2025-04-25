import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importa tu componente principal

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';

import { AppRoutingModule } from './app.routes'; // Asegúrate de que esta importación sea correcta

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UsuarioComponent,
    PerfilComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Este módulo maneja las rutas de tu aplicación
  ],
  providers: [],
  bootstrap: [AppComponent] // Especifica el componente principal
})
export class AppModule { }