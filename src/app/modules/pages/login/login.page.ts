import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Network } from '@capacitor/network';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  networkAccess: boolean;
  constructor(private menu: MenuController, private AlertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.menuDisable();

  }
  menuDisable(){
    this.menu.enable(false,'menuBar')
  }
  networkCheck(){
    Network.getStatus().then(a=> {this.networkAccess = a.connected;if(!this.networkAccess){
      this.presentAlert()
    } this.router.navigateByUrl("/mainpage")})


  }
  async presentAlert() {
    const alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header: 'Bağlantı Hatası!',
      message: 'İnternet bağlantınızı kontrol ediniz!!!',
      buttons: ['Tamam']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }





}
