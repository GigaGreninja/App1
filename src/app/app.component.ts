import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isMenuOpen: boolean = false;
  title = 'App1';
  public onSidenavClick(): void{
    this.isMenuOpen = false;
  }
}
