import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  message: string = "component 2"

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage()
  {
    this.messageEvent.emit(this.message);
  }
  constructor() { }
}
