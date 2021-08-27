import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  array: any[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('slides') slide: IonSlides;

  next() {
    this.slide.slideNext();
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
