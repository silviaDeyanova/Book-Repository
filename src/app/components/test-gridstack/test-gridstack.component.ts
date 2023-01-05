import { Component, OnInit } from '@angular/core';
import { GridStack } from 'gridstack';

@Component({
  selector: 'app-test-gridstack',
  templateUrl: './test-gridstack.component.html',
  styleUrls: ['./test-gridstack.component.scss'],
})
export class TestGridstackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    GridStack.init({
      column: 12,
      resizable: {
        handles: 'e,w', //can specify 'e,se,s,sw,w' for direction in which to resize
      },
    });
  }
}
