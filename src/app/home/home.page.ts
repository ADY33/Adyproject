import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent} from 'ionic2-calendar';
import { CalModalPage } from '../pages/cal-modal/cal-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  eventSource = [];
  viewTitle: String;
  
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };


  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  modalCtrl: any;

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {}
  next(){
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  createRandomEvents(){
    var events = [];
    for (var i = 0; i<50; i +=1){
      var date = new Date();
      var evenType = Math.floor(Math.random() *2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
     
      if (evenType === 0){
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )

        );
        if(endDay === startDay){
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay,
            
          )
        );
      
        events.push({
          title: 'all Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      }else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getUTCFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
        date.getMinutes () + endMinute
        );
        events.push({
          title: 'Event - ' +i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
     
    }
    this.eventSource = events;
     
    }
    removeEvent(){
      this.eventSource = [];
    }

    async openCalModal(){
      const modal = await this.modalCtrl.create({
        Component : CalModalPage,
        cssClass: 'cal-modal',
        backdropDismiss: false
      });

      await modal.present();

      modal.onDismiss().then((result) => {
        if(result.data && result.data.event){
          let event = result.data.event;
          if(event.allDay){
            let start = event.startTime;
            event.startTime = new Date(
              Date.UTC(
                start.getUTCFullYear(),
                start.getUTCFullMonth(),
                start.getUTCDate()
              )
            );
            event.endTime = new Date(
              Date.UTC(
                start.getUTCFullYear(),
                start.getUTCFullMonth(),
                start.getUTCDate() + 1
              )
            );
          }
          this.eventSource.push(result.data.event);
          this.myCal.loadEvents();
        }
      });
    }
  }



