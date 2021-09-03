import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Network } from '@capacitor/network';
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
    this.menu.close('menuBar');
  }
  network(){
    const a = Network.getStatus();
    a.then(res => console.log(res));

  }
}
