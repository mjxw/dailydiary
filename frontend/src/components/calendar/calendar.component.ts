import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {CalendarService} from '../../services/calendar.service';
import {SearchService} from '../../services/search.service';


const now = new Date();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  
  constructor(private calendarService: CalendarService, private searchService: SearchService) { }

  ngOnInit() {
    this.selectToday();
  }

  // On init, we want to start our app state with today's date
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  // When user clicks on a date on calendar widget, we set app state to that date
  setDate() {
    let month = this.model.month + ""; 
    let day = this.model.day + "";
    if (Number(day) < 10) {
      day = "0" + day;
    }

    if (Number(month) < 10) {
      month= "0" + month;
    }

    let dateString = this.model.year + "-" + month + "-" + day;
    this.calendarService.setDate(dateString);
    this.searchService.switchViews();
  }


}
