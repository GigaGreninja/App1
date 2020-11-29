import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';


const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule 
];



@NgModule({
  declarations: [],
  imports: [uiModules, BrowserModule],
  exports: uiModules 
})
export class AppUiModule { }
