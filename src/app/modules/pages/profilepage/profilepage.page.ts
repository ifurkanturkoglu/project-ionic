import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
})
export class ProfilepagePage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async logout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Çıkış Yapılıyor...',
      message: '<strong>Onaylıyor musunuz ?</strong>',
      buttons: [
        {
          text: 'Evet',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Okay');            
          }
        }, {
          text: 'Hayır',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');            
          }
        }
      ]
    });

    await alert.present();
  }

}
