import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  getNumbers(): Observable<Array<number>>{
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(42);
      }, 1000);

      setTimeout(() => {
        observer.next(43);
      }, 2000);

      setTimeout(() => {
        observer.next(44);
      }, 3000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    })
  }

}