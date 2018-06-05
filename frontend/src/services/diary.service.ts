import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const now = new Date();

@Injectable()
export class DiaryService {
  observableEntry: BehaviorSubject<String>;
  observableTitle: BehaviorSubject<String>;
  title: String = '';
  entry: String = '';
  today: String = '';

  constructor(private http: HttpClient){
    this.observableEntry = <BehaviorSubject<any>> new BehaviorSubject(String);    
    this.observableTitle = <BehaviorSubject<any>> new BehaviorSubject(String); 
    this.observableEntry.next(null);
    this.observableTitle.next(null);   

    // Get a reference to today's date in the proper format
    let year = now.getFullYear();
    let month = now.getMonth() + 1 + '';
    let date = now.getDate() + '';

    if(Number(month) < 10) {
      month = '0' + month;
    }

    if(Number(date) < 10) {
      date = '0' + date;
    }

    this.today = year + "-" + month + "-" + date;
  }

  // Make HTTTP GET requests to server for entries based off of today's date or a future/past date.
  // Update observable variables with response data
  getEntry(date) {
    if (date === this.today) {
      this.http.get('http://localhost:8080/api/v1/pages/today').subscribe(data => {
        let entry = JSON.parse(JSON.stringify(data));
        if (entry.title !== '' && entry.content !== '') {
          this.observableTitle.next(entry.title);
          this.observableEntry.next(entry.content);
        } else {
          this.observableTitle.next(null);
          this.observableEntry.next(null);
        }
      });
    } else {
      this.http.get('http://localhost:8080/api/v1/pages/' + date)
        .subscribe(data => {
          let entry = JSON.parse(JSON.stringify(data));
          if (entry.title !== '' && entry.content !== '') {
            this.observableTitle.next(entry.title);
            this.observableEntry.next(entry.content);
          } else {
            this.observableTitle.next(null);
            this.observableEntry.next(null);
          }
        });
    }

  }

  // Makes HTTP POST requests to server to update diary entries. 
  // Updates observable variables with data posted from user
  postEntry(date, title, entry) {
    this.observableEntry.next(entry);
    this.observableTitle.next(title);
    
    // Use this endpoint if we are NOT saving to today's entry
    if (date !== this.today) {
      this.http.post('http://localhost:8080/api/v1/pages/' + date, {
        "date_created": date,
        "content": entry,
        "title": title     
      })
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log('Error occured');
          }
        );
      
      // Use this endpoint if we are saving to today's entry
      } else {
      this.http.post('http://localhost:8080/api/v1/pages/', {
        "date_created": date,
        "content": entry,
        "title": title
      })
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log('Error occured');
          }
        );
    }
  }

}
