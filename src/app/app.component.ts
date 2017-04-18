import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [ AppService ]
})
export class AppComponent {
  
  private values: Array<number> = [];
  private anyErrors: boolean;
  private numbersFinished: boolean;
  private messages: Array<string> = [];
  private messagesFinished: boolean;

  constructor(
      private appService: AppService
  ) {}
  
  init() {
      this.appService.getNumbers().subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.numbersFinished = true
      );


      this.appService.getMessages().subscribe(
          value => this.messages.push(value),
          error => this.anyErrors = true,
          () => this.messagesFinished = true
      );
  }
}