import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// plugins
import { SQLite } from '@ionic-native/sqlite/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    
    SQLite,
    { 
      provide: RouteReuseStrategy, 
      
      useClass: IonicRouteStrategy 
    },ImagePicker
    
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}