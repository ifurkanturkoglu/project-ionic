import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.page.html',
  styleUrls: ['./profilepage.page.scss'],
})
export class ProfilepagePage implements OnInit {

  fullname:any = "Ad Soyad";
  class:any = "12";

  public photos: Photos[] = [];
  private Photo_Storage: string = "photos";

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private router: Router) { }

  ngOnInit() {
  }

  async setProfileInfos(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Profil Bilgilerini Düzenle',
      inputs: [
        {          
          type: 'text',
          value: `${this.fullname}`
        },
        {          
          type: 'text',          
          value: `${this.class}`        
        }        
      ],
      buttons: [
        {
          text: 'İptal',          
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Kaydet',
          handler: () => {
            
          }
        }
      ]
    });

    await alert.present();
  }

  async setPhoto() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Profil Fotoğrafını Düzenle',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Fotoğraf Çek',
        role: 'takePhoto',
        icon: 'camera',
        handler: async () => {
          const image = await Camera.getPhoto({
            quality: 100,
            allowEditing: true,
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera
          });
          const savedImageFile = await this.savePicture(image);
          this.photos.unshift(savedImageFile);

          Storage.set({ key: this.Photo_Storage, value: JSON.stringify(this.photos) });
        }
      }, {
        text: 'Galeriden Seç',
        role: 'getPhoto',
        icon: 'images',
        handler: async () => {
          const image = await Camera.getPhoto({
            quality: 100,
            allowEditing: true,
            resultType: CameraResultType.Uri,
            source: CameraSource.Photos
          });
        }
      }, {
        text: 'Kapat',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }
  public async loadSaved() {

    const photoList = await Storage.get({ key: this.Photo_Storage });
    this.photos = JSON.parse(photoList.value) || [];

    for (let photo of this.photos) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data
      });
      photo.webviewpath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  async savePicture(image: Photo) {
    const base64Data = await this.readAsBase64(image);
    const filename = "profilPicture.jpeg";
    const savedfile = await Filesystem.writeFile({
      path: filename,
      data: base64Data,
      directory: Directory.Data
    })
    return { filepath: filename, webviewpath: image.webPath };
  }

  private async readAsBase64(cameraPhoto: Photo) {

    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  async logout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Çıkış Yapılıyor...',
      message: '<strong>Onaylıyor musunuz ?</strong>',
      buttons: [
        {
          text: 'Evet',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl("/login");
          }
        }, {
          text: 'Hayır',          
          handler: () => {            
          }
        }
      ]
    });

    await alert.present();
  }

}

export interface Photos {
  filepath: string,
  webviewpath: string;
}
