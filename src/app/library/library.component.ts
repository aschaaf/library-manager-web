import { Component, OnInit } from '@angular/core';
import { LibraryService } from './library.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public bookList: Book[];
  displayedColumns: string[] = ['title', 'author', 'available'];
  constructor(private libraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.getAllAvailableBooks();
  }

  getAllAvailableBooks(): void {
    this.libraryService.getAllAvailableBooks()
    .subscribe(books => {
      this.bookList = books;
    });;
  }
}
