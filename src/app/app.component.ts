import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgOnButtonClick: string | undefined;
  msgOnChildCompInit: String | undefined;

  name = 'Angular';

  receivedMessageHandler(p: string | undefined) {
    debugger;
    this.msgOnButtonClick = p;
  }

  receiveAutoMsgHandler(p: String | undefined) {
    debugger;
    this.msgOnChildCompInit = p;
  }
}
