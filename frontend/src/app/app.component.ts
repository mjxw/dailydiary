import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searching: Boolean = false;
  
  constructor(private searchService: SearchService) { }
  
    ngOnInit() {
      this.searchService.observableSearch.subscribe(observableSearch => this.searching = observableSearch);      
    }
}
