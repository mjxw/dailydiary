import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { EntryComponent } from '../components/entry/entry.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { DiaryService } from '../services/diary.service';
import { CalendarService } from '../services/calendar.service';
import { SearchComponent } from '../components/search/search.component';
import { SearchService } from '../services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryComponent,
    CalendarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [DiaryService, CalendarService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
