import { BookService } from './../../services/book.service';
import { IBook } from './../../interfaces/IBook';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  searchTerm: string = '';
  mostRatedBooks!: IBook[];
  foundBooks!: IBook[];
  @ViewChild('draggable') private draggableElement!: ElementRef;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getMostRatedBooks();
  }

  public searchBook(searchWord: string): void {
    if (searchWord !== '') {
      this.bookService.searchBook(searchWord).subscribe((books) => {
        this.foundBooks = books;
      });
    } else {
      this.foundBooks = [];
      // this.draggableElement.nativeElement.remove();
    }
  }

  private getMostRatedBooks(): void {
    this.bookService.getMostRatedBooks().subscribe((books) => {
      this.mostRatedBooks = books;
    });
    console.log(this.mostRatedBooks);
  }
}
