import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, ToastController } from '@ionic/angular';

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
  buttons: any[] = ["A", "B", "C", "D"];
  results: string = "";
  true: number = 0;
  false: number = 0;
  empty: number = 0;
  score: any;

  a: any = "bookmark-outline";

  constructor(private alertController: AlertController, private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  @ViewChild('slides', { static: true }) slide: IonSlides;

  async next(que: number, ans: string) {

    ans = ans.toLowerCase();
    this.results = this.results + que + ". Soru: " + ans.toUpperCase() + "<br>";

    if (this.answers.length < this.questions.length) {
      this.answers.push({ que: que, ans: ans });

      if (this.answers.length == this.questions.length) {
        this.answers.forEach(f => {
          if (f.ans == this.corrects[f.que - 1]) this.true++;
          else if (f.ans != this.corrects[f.que - 1]) this.false++;
          else this.empty++;
        });
        this.score = (100 / this.questions.length) * this.true;

        const alert = await this.alertController.create({
          cssClass: 'results',
          header: `Puanınız: ${this.score}`,
          message: `${this.results} <br>Doğru Sayısı: <span>${this.true}</span><br>
            Yanlış Sayısı: <span>${this.false}</span><br>
            Boş Sayısı: <span>${this.empty}</span><br>`,
          buttons: [
            {
              text: 'Göz At',
              cssClass: 'gozat',
              handler: () => {

              }
            }, {
              text: 'Bitir',
              cssClass: 'bitir',
              handler: () => {
                this.router.navigateByUrl("/mainpage");
              }
            }
          ]
        });

        await alert.present();
      }
    }
    this.slide.slideNext();

  }



  flip: boolean = true;

  info(idx: number) {
    if (this.flip) {
      document.getElementById("slide" + idx).style.transform = "rotateY(180deg)";
      this.flip = !this.flip;
    }
    else {
      document.getElementById("slide" + idx).style.transform = "rotateY(360deg)";
      this.flip = !this.flip;
    }
  }

  saved: boolean = false;
  async toast(idx: number) {
    const toast = await this.toastController.create({
      message: 'Kaydedildi. Profil Sayfasından Ulaşabilirsiniz.',
      duration: 2000,
      cssClass: '--color: red',
    });
    toast.present();

    if (!this.saved) {
      document.getElementById('saved' + idx).attributes.getNamedItem("name").value = "bookmark";
      this.saved = !this.saved;
    }

    if (this.saved) {
      document.getElementById('saved' + idx).attributes.getNamedItem("name").value = "bookmark-outline";
      this.saved = !this.saved;
    }
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    direction: 'vertical'
  };

}
