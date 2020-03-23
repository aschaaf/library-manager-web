import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = "https://localhost:44317/api/library";
  }

  getAllAvailableBooks() {
    return this.http.get<Book[]>(this.baseUrl + '/all')
  }
}
