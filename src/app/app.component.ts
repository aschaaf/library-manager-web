import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-manager';
  opened = true;

  book: Book;
  book_title: string;
  book_author: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {
        id: '',
        title: this.book_title, 
        author: this.book_title,
        available: 'true'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.book = result;
    });
  }
}

@Component({
  selector: 'add-book-dialog',
  templateUrl: 'dialogs/add-book-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}