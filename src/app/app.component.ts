import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  constructor(private menu: MenuController,private router: Router) { }

  openCustom(){
    this.menu.enable(true, 'menuBar');
    this.menu.open('menuBar');
  }
  closeCustom(){
    this.menu.enable(false, 'menuBar');
    this.menu.close('menuBar');
  }  
}




