import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; 
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  name : any;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    
    events: [] // Initialize events as an empty array
  };

  ngOnInit(): void {
    this.name=localStorage.getItem('name');


  }

}
