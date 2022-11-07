import { LoginService } from './../../services/login.service';
import { BookService } from './../../services/book.service';
import { IBook } from './../../interfaces/IBook';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss'],
})
export class EditInformationComponent implements OnInit {
  public bookInfo!: IBook;
  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    this.activeRoute.params.subscribe((params) => {
      this.bookService.getBookById(params['id']).subscribe((book) => {
        this.bookInfo = book;
      });
    });
  }

  submit() {
    this.bookService.updateBook(this.bookInfo).subscribe(
      (book) => {
        console.log('Book updated successfully');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
