import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentsService } from './students.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
