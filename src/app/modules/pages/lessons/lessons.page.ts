import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {

  questions: any[] = [
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%201.png?alt=media&token=1f6fc5d6-0c4c-443c-aabe-18dc8e0af87b",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%202.png?alt=media&token=b6ec6524-0818-4303-a74a-7043f760b891",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%203.png?alt=media&token=aed1c4a4-52c5-48bb-9d08-78e2cb6d2d9e",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%204.png?alt=media&token=55887eb7-4791-4f76-85a1-ed28e3ea9737",
    "https://firebasestorage.googleapis.com/v0/b/testmanager-fb88a.appspot.com/o/5.S%C4%B1n%C4%B1f%2FT%C3%BCrk%C3%A7e%2FC%C3%BCmlede%20Anlam%2FTest%201%2FSoru%205.png?alt=media&token=3c6b6b14-cf8c-4cea-9b51-9f8148852ff0"
  ];

  answers: any[] = []
  corrects: any[] = ["a", "c", "d", "d", "b"];
  true: number = 0;
  false: number = 0;
  score: any;

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  @ViewChild('slides') slide: IonSlides;

  async next(que: number, ans: string) {

    if (this.answers.length < this.questions.length) {
      this.answers.push({ que: que, ans: ans });

      if (this.answers.length == 5) {
        this.answers.forEach(f => {
          if (f.ans == this.corrects[f.que - 1]) this.true++;
          if (f.ans != this.corrects[f.que - 1]) this.false++;
        });
      }
      this.slide.slideNext();
    }
    if (this.answers.length == this.questions.length) {
      this.score = (100 / this.questions.length) * this.true;

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Sonuçlarınız',
        message: `Doğru Sayısı: ${this.true} \n Yanlış Sayısı: ${this.false} \n Puanınız: ${this.score}`,
        buttons: [
          {
            text: 'Tekrar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              //this.slide.slideTo(0);
              this.answers = [];
            }
          }, {
            text: 'Bitir',            
            handler: () => {
              this.router.navigateByUrl("");
            }
          }
        ]
      });

      await alert.present();
    }
  }

  flip: boolean = true;

  info(idx: number) {
    if (this.flip) {
      document.getElementById("slide" + idx).style.transform = "rotateY(180deg)";
      this.flip = !this.flip;
    }
    else {
      document.getElementById("slide" + idx).style.transform = "rotateY(0deg)";
      this.flip = !this.flip;
    }
  }

  draw: boolean = true;

  drawScreen(idx: number) {
    if (this.draw) {
      document.getElementById('card' + idx).className = "md card-content-md hydrated opendraw";
      this.draw = !this.draw;
    }
    else {
      document.getElementById('card' + idx).className = "md card-content-md hydrated closedraw";
      this.draw = !this.draw;
    }
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

}
