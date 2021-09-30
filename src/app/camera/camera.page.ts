import { Component, NgModule } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Plugin} from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins } from 'protractor/built/plugins';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { variable } from '@angular/compiler/src/output/output_ast';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule } from '@angular/router';
import { CameraPageRoutingModule } from './camera-routing.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-camera',
  templateUrl: 'camera.page.html',
  styleUrls: ['camera.page.scss']
})


/*
  export class CameraPage {
    photos:any[];
  constructor(public camera:Camera,public file:File){

  }

  TakePhotos()
  {
      quality:100,
      mediaType:this.camera.MediaType.PICTURE,
      destinationType:this.camera.DestinationType.FILE_URI,
      encodingType:this.camera.EncodingType.JPEG
    }
    this.camera.getPicture().then((imagedata)=>{
      let filename = imagedata.substring(imagedata.lastIndexOf('/')+1 );
      let path = imagedata.substring(0,imagedata.lastIndexOf('/')+1);
      this.file.readAsDataURL(path,filename).then((base64data)=>{
      this.photos.push(base64data);
      
      })
    })
  }

    
  }
*/



  export class CameraPage {
    image: string;

    cameraOptions: CameraOptions = {
      quality: 35,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    constructor(private camera: Camera) { }

    clickImg() {
      this.camera.getPicture(this.cameraOptions).then((res) => {
        let base64 = 'data:image/jpeg;base64,' + res;
        this.image = base64;
      }, (error) => {
        alert(error);
      });
    }
  }

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: CameraPage }]),
    CameraPageRoutingModule,
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
