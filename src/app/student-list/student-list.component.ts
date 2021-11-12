import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students:any = []
  constructor(private std:StudentsService) {  }

  ngOnInit(): void {
    this.students = this.std.getStudents()
  }

}
