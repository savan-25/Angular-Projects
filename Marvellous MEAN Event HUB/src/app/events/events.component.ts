import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  standalone : false
})
export class EventsComponent implements OnInit 
{

  events : any[] = []
  selectedEvent:any =null;
  
  admission = {
    studentName:'',
    email:'',
    phone:'',
    eventId:''
  }
  takeAdmission(event:any)
  {
    this.selectedEvent = event;
  }
  constructor(private _eventService: EventService) { }
 
  submitAdmission()
  {
    this.admission.eventId = this.selectedEvent._id;

    this._eventService.submitAdmission(this.admission).subscribe(res=>
    {
      alert("Admission Submitted!!");
      this.admission = {studentName:'',email:'',phone:'',eventId:''};
      this.selectedEvent = null;//close form
    }
    )
  }
  ngOnInit() 
  {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }
}
