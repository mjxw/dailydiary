import { Component } from '@angular/core';
import {DiaryService} from '../../services/diary.service';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  title : String = null;
  entry : String = null; 
  entryDate : String = '';
  editingMode: Boolean = false;

  constructor(private diaryService: DiaryService, private calendarService: CalendarService) {
    this.calendarService.observableDate.subscribe(observableDate => this.entryDate = observableDate);
    this.diaryService.observableEntry.subscribe(observableEntry => this.entry = observableEntry);
    this.diaryService.observableTitle.subscribe(observableTitle => this.title = observableTitle);
   }

  // If user clicks on edit button, then it'll toggle edit mode
  toggleEditingMode() {
    this.editingMode = !this.editingMode;
  }

  // Call the diaryService to make POST request to server for updating diary entries
  // Calls toggleEditingMode() after to revert back to normal diary viewing
  updateDiary(data) {
    this.diaryService.postEntry(this.entryDate, data.title, data.entry);
    this.toggleEditingMode();
  }

}
