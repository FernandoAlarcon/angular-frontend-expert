import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BreedsSelectorComponent } from './views/breeds-selector/breeds-selector.component';
import { BreedsTableComponent } from './views/breeds-table/breeds-table.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserInfoComponent } from './views/user-info/user-info.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component'; // Importa el módulo del carrusel
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@NgModule({
  declarations: [
    AppComponent,
    BreedsSelectorComponent,
    BreedsTableComponent,
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    CarouselComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,  // Asegúrate de incluir FormsModule aquí
    CarouselModule.forRoot() // Añade el módulo a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
