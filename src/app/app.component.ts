import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	template: `
	  <b>Angular 2 Component Using Observables!</b>
	 
	  <h6 style="margin-bottom: 0">VALUES:</h6>
	  <div *ngFor="let value of values">- {{ value }}</div>
	  
	  <h6 style="margin-bottom: 0">ERRORs:</h6>
	  <div>Errors: {{anyErrors}}</div>
	  
	  <h6 style="margin-bottom: 0">FINISHED:</h6>
	  <div>Finished: {{ finished }}</div>
	  
	  <button style="margin-top: 2rem;" (click)="init()">Init</button>
	`,
    providers: [ AppService ]
})
export class AppComponent {
  
  private data: Observable<Array<number>>;
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
  }
}