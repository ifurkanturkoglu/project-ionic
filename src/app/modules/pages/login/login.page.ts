import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Network } from '@capacitor/network';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  networkAccess:boolean;
  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menuDisable()
  }
  menuDisable(){
    this.menu.enable(false,"menuBar")
  }
  networkCheck(){
    Network.getStatus().then(a=> {this.networkAccess = a.connected})
  }
}
