import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  message:string;
  constructor() { }

  receiveMessage($event) {
    this.message = $event;
  }
 
  ngOnInit() {
  }

}
