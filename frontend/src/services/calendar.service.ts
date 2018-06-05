import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {DiaryService} from '../services/diary.service';


const now = new Date();

@Injectable()
export class CalendarService {
  date: String = '';
  observableDate: BehaviorSubject<String>;
  today: String = '';  

  constructor(private diaryService: DiaryService) {
    this.observableDate = <BehaviorSubject<any>> new BehaviorSubject(String);

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
    this.setDate(this.today);
    
   }


  // Sets/updates app's date state and gets diary entry for that date(if any)
  setDate(dateString) {
    this.date = dateString;
    this.observableDate.next(this.date);
    this.diaryService.getEntry(dateString);
  }

}
