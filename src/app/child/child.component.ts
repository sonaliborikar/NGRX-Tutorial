import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childButtonEvent = new EventEmitter();
  @Output() onInitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    debugger;
    this.onInitEvent.emit('This meesage is appeared automatically as the child component will intialized. This message is defined in the child component ngOninit method');
  }
  clickHandler() {
    debugger;
    this.childButtonEvent.emit('This message is appearing here because user has clicked the button which is available in child component');
  }

}
