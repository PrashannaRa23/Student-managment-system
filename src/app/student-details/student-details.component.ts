import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public students: any = []
  constructor(private stdinfo:StudentsService) {  }

  ngOnInit(): void {
    this.students = this.stdinfo.getStudents()
  }

}
