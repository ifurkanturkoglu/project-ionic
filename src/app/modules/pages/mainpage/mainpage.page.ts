import { IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {


  constructor() { }
  
  ngOnInit() {
    

  }
  
  sliderAuto(slides){
    slides.startAutoplay();
  }
  
  

  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    initialSlide: 0,
    speed: 400,    
  };
}
