import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
}
