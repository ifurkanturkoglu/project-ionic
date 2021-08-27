import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  array:any[] = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
