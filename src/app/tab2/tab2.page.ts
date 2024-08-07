import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  photos:any[]=[];
  constructor(private photoService:PhotoService,
  ) {
    this.photos=this.photoService.photos
  }

  takePhoto(){
    this.photoService.addphoto();
  }

}
