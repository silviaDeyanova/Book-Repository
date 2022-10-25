import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/interfaces/IBook';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss'],
})
export class BookDescriptionComponent implements OnInit {
  data!: IBook;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params['id'];
    this.getData(id);
  }

  public getData(id: number): void {
    this.bookService.getBookById(id).subscribe((data) => (this.data = data));
  }
}
