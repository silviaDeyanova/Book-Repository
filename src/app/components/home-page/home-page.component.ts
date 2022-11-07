import { LoginService } from './../../services/login.service';
import { BookService } from './../../services/book.service';
import { IBook } from './../../interfaces/IBook';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  searchTerm: string = '';
  mostRatedBooks!: IBook[];
  foundBooks!: IBook[];
  isHidden: boolean = false;
  @ViewChild('hide') private hideElementRef!: ElementRef;
  isLoggedIn: boolean = false;

  constructor(
    private bookService: BookService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getMostRatedBooks();
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  public searchBook(searchWord: string): void {
    if (searchWord !== '') {
      this.bookService.searchBook(searchWord).subscribe((books) => {
        this.foundBooks = books;
        this.isHidden = false;
      });
    } else {
      this.foundBooks = [];
    }
  }

  private getMostRatedBooks(): void {
    this.bookService.getMostRatedBooks().subscribe((books) => {
      this.mostRatedBooks = books;
    });
  }

  public changeTheMostRatedCotent(searchWord: string): void {
    if (searchWord !== '') {
      this.bookService.searchBook(searchWord).subscribe((books) => {
        this.mostRatedBooks = books;
      });
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.hideElementRef?.nativeElement.contains(event.target)) {
      this.isHidden = true;
    }
  }

  editContent() {}
}
