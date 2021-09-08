import { IonSlides, MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {


  constructor(private menu: MenuController) { }

  ngOnInit() {

    this.menu.enable(true, 'menuBar');
  }

  sliderAuto(slides){
    slides.startAutoplay();
  }



  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400,
  };
}
