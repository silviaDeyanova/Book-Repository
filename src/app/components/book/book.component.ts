import { LoginService } from './../../services/login.service';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/interfaces/IBook';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ToastrService } from 'ngx-toastr';

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
    private dialog: MatDialog,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {}

  openEditDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      panelClass: 'content-dialog',
      width: '500px',
      height: '410px',
      disableClose: true,
      autoFocus: true,
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bookService.updateBook(result).subscribe(
          (book) => {
            this.data = book;
            this.toastService.success('Book updated successfully');
          },
          (error) => {
            console.error(error);
            this.toastService.error(`${error}`);
          }
        );
      }
    });
  }
}
