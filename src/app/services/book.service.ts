import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../interfaces/IBook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  searchBook(searchTerm: string): Observable<IBook[]> {
    let term = searchTerm.toLowerCase();
    let result = Object.values(this.DATA).filter((book) => {
      return book.title.toLowerCase().includes(term);
    });
    return of(result);
  }

  getMostRatedBooks(): Observable<IBook[]> {
    return of(Object.values(this.DATA).filter((book) => book.likes >= 10));
  }

  getAllBooks(): Observable<IBook[]> {
    return of(Object.values(this.DATA));
  }

  getBookById(id: number): Observable<any> {
    return of(this.DATA[id]);
  }

  updateBook(book: IBook) {
    let oldValue = this.DATA[book.id];
    this.DATA[book.id] = { ...oldValue, ...book };
    return of(this.DATA[book.id]);
  }

  DATA: { [id: string]: IBook } = {
    0: {
      id: 0,
      title: 'The Selection',
      author: 'Kiera Cass',
      resume:
        'For thirty-five girls, the Selection is the chance of a lifetime. The opportunity to escape the life laid out for them since birth. To be swept up in a world of glittering gowns and priceless jewels. To live in a palace and compete for the heart of gorgeous Prince Maxon.',
      likes: 10,
      cover: '../../assets/theSelection.jpg',
    },
    1: {
      id: 1,
      title: 'The Elite',
      author: 'Kiera Cass',
      resume:
        "The Selection began with thirty-five girls. Now with the group narrowed down to the six Elite, the competition to win Prince Maxon's heart is fiercer than ever—and America is still struggling to decide where her heart truly lies. Is it with Maxon, who could make her life a fairy tale? Or with her first love, Aspen?",
      likes: 14,
      cover: '../../assets/theElite.jpg',
    },
    2: {
      id: 2,
      title: 'The One',
      author: 'Kiera Cass',
      resume:
        "When she was chosen to compete in the Selection, America never dreamed she would find herself anywhere close to the crown—or to Prince Maxon's heart. But as the end of the competition approaches, and the threats outside the palace walls grow more vicious, America realizes just how much she stands to lose—and how hard she'll have to fight for the future she wants. ",
      likes: 4,
      cover: '../../assets/theOne.jpg',
    },
    3: {
      id: 3,
      title: 'The Heir',
      author: 'Kiera Cass',
      resume:
        "Princess Eadlyn has grown up hearing endless stories about how her mother and father met. Twenty years ago, America Singer entered the Selection and won the heart of Prince Maxon - and they lived happily ever after. Eadlyn has always found their fairy-tale story romantic, but she has no interest in trying to repeat it. If it were up to her, she'd put off marriage for as long as possible.",
      likes: 4,
      cover: '../../assets/theHeir.jpg',
    },
    4: {
      id: 4,
      title: 'The Crown',
      author: 'Kiera Cass',
      resume:
        'When Eadlyn became the first princess of Illéa to hold her own Selection, she didn’t think she would fall in love with any of her thirty-five suitors. She spent the first few weeks of the competition counting down the days until she could send them all home. But as events at the palace force Eadlyn even further into the spotlight, she realizes that she might not be content remaining alone.',
      likes: 4,
      cover: '../../assets/theCrown.jpg',
    },
  };
}
