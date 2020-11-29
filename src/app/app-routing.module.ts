import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ScytheComponent } from './scythe/scythe.component';
import { OAComponent } from './OtherArt/OA.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutMeComponent},
  {path: 'commissions', component: CommissionsComponent},
  {path: 'pokemon', component: PokemonComponent},
  {path: 'scythe', component: ScytheComponent},
  {path: 'OtherArt', component: OAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
