import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  fullname: any;
  email: any;
  password: any;
  class: any;

  constructor(private menu: MenuController,
    private loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
    this.menu.enable(false, 'menuBar');
  }

  async signin() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Lütfen Bekleyiniz...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  toLogin() {
    this.router.navigateByUrl("/login");
  }
}
