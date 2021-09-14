/***********************************************************/
/*Auteur : DELAVAL Kevin                                   */
/*Projet : Pokédex - Angular + Tailwind css                */
/*Date de la création du fichier : 14/09/2021              */
/***********************************************************/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
