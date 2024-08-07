import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
public photos:any[] = [];
  constructor() { }

  public async addphoto(){
    const photos = await Camera.getPhoto({
      resultType:CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100
    });

    this.photos.push(photos.webPath);



  }

}
