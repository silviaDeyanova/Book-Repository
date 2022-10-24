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
    let result = this.DATA.filter((book) => {
      return book.title.toLowerCase().indexOf(term) > -1;
    });
    // let emitter = new EventEmitter(true);
    // emitter.emit(result);
    return of(result);
  }

  DATA: IBook[] = [
    {
      id: 0,
      title: 'Obsidian',
      resume:
        'When we moved to West Virginia right before my senior year, I’d pretty much resigned myself to thick accents, dodgy internet access, and a whole lot of boring… until I spotted my hot neighbor, with his looming height and eerie green eyes. Things were looking up.',
      likes: 5,
    },
    {
      id: 1,
      title: 'Onyx',
      resume:
        'Thanks to his alien mojo, Daemon’s determined to prove what he feels for me is more than a product of our bizarro connection. So I’ve sworn him off, even though he’s running more hot than cold these days. But we’ve got bigger problems.',
      likes: 4,
    },
    {
      id: 2,
      title: 'Opal',
      resume:
        'When he set out to prove his feelings for me, he wasn’t fooling around. Doubting him isn’t something I’ll do again, and now that we’ve made it through the rough patches, well… There’s a lot of spontaneous combustion going on.',
      likes: 4,
    },
  ];
}
