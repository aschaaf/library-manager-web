import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public studentList: Student[];
  displayedColumns: string[] = ['id', 'firstName'];
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentsService.getAllStudents()
    .subscribe(students => {
      this.studentList = students;
    });;
  }
}
