import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  getNumbers(): Observable<number>{
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

  getMessages(): Observable<string>{
    return new Observable(observer => {
      setTimeout(() => {
        observer.next("Hey what's up?");
      }, 1000);

      setTimeout(() => {
        observer.next("What are you doing?");
      }, 2000);

      setTimeout(() => {
        observer.next("Why are you here?");
      }, 3000);

      setTimeout(() => {
        observer.next("Hi");
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    })
  }

}