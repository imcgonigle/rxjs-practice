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
  private finished: boolean;

  constructor(
      private appService: AppService
  ) {}
  
  init() {
      this.appService.getNumbers().subscribe(
          value => this.values.push(Number(value)),
          error => this.anyErrors = true,
          () => this.finished = true
      );

      this.appService.getNumbers().forEach( value => {
          this.values.push(value)
      }).then(x => {
          console.log("Finished");
      });
  }
}