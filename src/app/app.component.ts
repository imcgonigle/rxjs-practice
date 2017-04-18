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
  
  private numbers: Array<number> = [];
  private numbersFinished: boolean;
  private messages: Array<string> = [];
  private messagesFinished: boolean;
  private anyErrors: boolean;

  constructor(
      private appService: AppService
  ) {}
  
  startProgram() {
      this.messages = [];
      this.numbers = [];

      this.appService.getNumbers().subscribe(
          value => this.numbers.push(value),
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