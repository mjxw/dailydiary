import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable()
export class SearchService {
  observableSearch: BehaviorSubject<Boolean>;
  searching: Boolean = false;
  results: any[] = [];
  observableResults: BehaviorSubject<any[]>;
  

  constructor(private http: HttpClient) {
    this.observableSearch = <BehaviorSubject<any>> new BehaviorSubject(Boolean);  
    this.observableSearch.next(this.searching);      
    this.observableResults = <BehaviorSubject<any[]>> new BehaviorSubject([]);
    
   }

  // Toggles searchMode
  toggleSearchMode() {
    this.searching = !this.searching;    
    this.observableSearch.next(this.searching)
  }

  // Make HTTP GET request to server to search diary entries for a specific keyword
  search(searchVal) {
    let params = new HttpParams().set("search", searchVal);    
    this.http.get('http://localhost:8080/api/v1/pages', {params: params}).subscribe(data => {
      this.results = JSON.parse(JSON.stringify(data));

      // Format date 
      for(var i = 0; i < this.results.length; i++) {
        this.results[i].creationDate = this.results[i].creationDate.substring(0,10);
      }
      this.observableResults.next(this.results);
    });
  }

  // If user clicks on calendar date when in search mode, revert back to viewing diary entry
  switchViews() {
    if(this.searching === true) {
      this.searching = !this.searching;
      this.observableSearch.next(this.searching);
    }
  }

}
