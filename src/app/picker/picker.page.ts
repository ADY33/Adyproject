import { Component, OnInit } from '@angular/core';
import {ImagePicker,ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Base64} from '@ionic-native/base64/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {
  images:any[]=[];
  constructor(private picker: ImagePicker) { 
    
  }

  ngOnInit() {
    this.picker.hasReadPermission().then((val) =>{
     if(val == false){
       this.picker.requestReadPermission();
     }
    },(err)=>{
      this.picker.requestReadPermission();
    }
    )
  }
  pickImage(){
    let options:ImagePickerOptions={
      maximumImagesCount:10,
      outputType:1
    }
    this.picker.getPictures(options).then((res)=>{
      for(var i = 0;i<res.length;i++){
        let base64ofImage = "data:image/png;base64,"+res[i];
        this.images.push(base64ofImage);
      }
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }
}
