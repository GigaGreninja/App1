import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppUiModule } from './app-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/Home.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ScytheComponent } from './scythe/scythe.component';
import { OAComponent } from './OtherArt/OA.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      AboutMeComponent,
      CommissionsComponent,
      PokemonComponent,
      ScytheComponent,
      OAComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppUiModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
