import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = "https://localhost:44317/api/library";
  }

  getAllStudents() {
    return this.http.get<Student[]>(this.baseUrl + '/students')
  }
}
