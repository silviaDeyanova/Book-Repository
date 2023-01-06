import { Component, HostListener, OnInit } from '@angular/core';
import { GridStack } from 'gridstack';

@Component({
  selector: 'app-test-gridstack',
  templateUrl: './test-gridstack.component.html',
  styleUrls: ['./test-gridstack.component.scss'],
})
export class TestGridstackComponent implements OnInit {
  constructor() {}
  public options = {
    column: 12,
    resizable: {
      handles: 'e,w', //can specify 'e,se,s,sw,w' for direction in which to resize
    },
    minRow: 1,
  };

  ngOnInit(): void {
    GridStack.init(this.options);

    // GridStack.setupDragIn('.sidebar .grid-stack-item', {
    //   appendTo: 'body',
    //   helper: (event: any) => {
    //     return event.target.cloneNode(true);
    //   },
    // });
  }

  // @HostListener('document:click', ['$event'])
  // drag(event: any) {}

  // handleDrop(event: any): void {
  //   return event.target.cloneNode(true);
  // }
}
