import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  @Output() messageEvent = new EventEmitter<string>();
  message:string;
  constructor() { }

  receiveMessage($event) {
    this.message = $event;
    this.messageEvent.emit(this.message)
  }
}
