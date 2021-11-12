import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public students = [
    {"name":"Prashanna Rai", "id":"101", "section":"C", "dept":"CSE"},
    {"name":"Diksha Rai", "id":"102", "section":"A", "dept":"Civil"},
    {"name":"Raunak Patel", "id":"103", "section":"B", "dept":"Mechanical"},
    {"name":"Sweta Gurung", "id":"104", "section":"B", "dept":"Electrical"},
    {"name":"Prazwal Khati", "id":"105", "section":"C", "dept":"Electrical"},
  ]

  getStudents(){
    return this.students
  }

  constructor() { }
}
