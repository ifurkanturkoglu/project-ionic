import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  array: any[] = [
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%201.png?alt=media&token=1f6fc5d6-0c4c-443c-aabe-18dc8e0af87b",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%202.png?alt=media&token=b6ec6524-0818-4303-a74a-7043f760b891",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%203.png?alt=media&token=aed1c4a4-52c5-48bb-9d08-78e2cb6d2d9e",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%204.png?alt=media&token=55887eb7-4791-4f76-85a1-ed28e3ea9737",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%205.png?alt=media&token=3c6b6b14-cf8c-4cea-9b51-9f8148852ff0"
  ];
  side: boolean = true;

  constructor() { }

  ngOnInit() {    
  }

  @ViewChild('slides') slide: IonSlides;

  next() {
    this.slide.slideNext();
  }

  info(idx: number) {
    this.side = !this.side;
  }

  drawScreen(idx: number) {
    document.getElementById('card' + idx).className = "ios card-content-ios hydrated opendraw";
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

}
