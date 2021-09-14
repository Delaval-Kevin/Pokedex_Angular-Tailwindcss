/***********************************************************/
/*Auteur : DELAVAL Kevin                                   */
/*Projet : Pokédex - Angular + Tailwind css                */
/*Date de la création du fichier : 14/09/2021              */
/***********************************************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  { path:'', redirectTo:'acceuil', pathMatch:'full'},
  { path:'pokemon', redirectTo:'acceuil', pathMatch:'full'},
  { path:'acceuil', component: AcceuilComponent},
  { path:'pokemon/:id', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
