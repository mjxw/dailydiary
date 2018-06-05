import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  // Calls searchService to search diary entries for specific keyword
  search(data) {
    this.searchService.toggleSearchMode();
    this.searchService.search(data.searchVal);
  }
}
