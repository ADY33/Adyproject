import {AfterViewInit, Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
  [x: string]: any;
  calendar = {
    mode: 'month',
  currentDate:new Date()

};
viewTitle: string;

event = {
  title: '',
  desc: '',
  startTime: null,
  endTime: '',
  allDay: true
};

 modalReady = false;

  constructor(private modalctrl: ModalController) { }
  
  ngAfterViewInit(){
    setTimeout(() => {
      this.modalReady = true;
    }
    ,0)

  }
  save(){
    this.modalCtrl.dismiss({event: this.event})
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onTimeSelected(ev){
    console.log('ev', ev);
    this.event.startTime = new Date(ev.selectedTime);
  }

  close(){
    this.modalCtrl.dismiss();
  }



}
