import { LoginService } from './../../services/login.service';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/interfaces/IBook';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() data!: IBook;
  constructor(
    private bookService: BookService,
    public loginService: LoginService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openEditDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      height: '400px',
      disableClose: true,
      autoFocus: true,
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bookService.updateBook(result).subscribe(
          (book) => {
            this.data = book;
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
  }
}
