import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions, FullCalendarComponent,Calendar } from '@fullcalendar/angular';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  ngOnInit() {
    // need for load calendar bundle first
  forwardRef(() => Calendar);

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridWeek dayGridMonth'
      },
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this)
    };

}
handleDateClick(arg) {
  console.log(arg);
}

handleEventClick(arg) {
  console.log(arg);
}

handleEventDragStop(arg) {
  console.log(arg);
}

updateHeader() {
  this.calendarOptions.headerToolbar = {
    left: 'prev,next myCustomButton',
    center: 'title',
    right: ''
  };
}

updateEvents() {
  const nowDate = new Date();
  const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

  this.calendarOptions.events = [{
    title: 'Updaten Event',
    start: yearMonth + '-08',
    end: yearMonth + '-10'
  }];
}
}
