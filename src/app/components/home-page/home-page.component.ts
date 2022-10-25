import { BookService } from './../../services/book.service';
import { IBook } from './../../interfaces/IBook';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  searchTerm: string = '';
  foundBooks!: IBook[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getMostRatedBooks();
  }

  public searchBook(searchWord: string): void {
    this.bookService.searchBook(searchWord).subscribe((books) => {
      this.foundBooks = books;
    });
  }

  private getMostRatedBooks(): void {
    this.bookService.getMostRatedBooks().subscribe((books) => {
      this.foundBooks = books;
    });
  }
}
