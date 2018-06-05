import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {CalendarService} from '../../services/calendar.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  
  constructor(private searchService : SearchService, private calendarService : CalendarService) { 
    this.searchService.observableResults.subscribe(observableResults => this.results = observableResults);    
  }

  ngOnInit() {
  }

  getEntry(index) {
    this.searchService.toggleSearchMode();
    this.calendarService.setDate(this.results[index].creationDate);
  }

}
