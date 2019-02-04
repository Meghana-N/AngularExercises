import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-parent-component',
  templateUrl: './grand-parent-component.component.html',
  styleUrls: ['./grand-parent-component.component.css']
})
export class GrandParentComponentComponent{
  message:string;
  constructor() { }

  receiveMessage($event) {
    this.message = $event;
  }
}
