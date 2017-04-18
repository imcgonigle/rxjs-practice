import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  getNumbers(): Observable<number>{
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(Math.floor(Math.random() * 100));
      }, Math.random() * 10000);

      setTimeout(() => {
        observer.next(Math.floor(Math.random() * 100));
      }, Math.random() * 10000);

      setTimeout(() => {
        observer.next(Math.floor(Math.random() * 100));
      }, Math.random() * 10000);

      setTimeout(() => {
        observer.next(Math.floor(Math.random() * 100));
      }, Math.random() * 10000);

      setTimeout(() => {
        observer.next(Math.floor(Math.random() * 100));
      }, Math.random() * 10000);

      setTimeout(() => {
        observer.next(Math.floor(Math.random() * 100));
      }, Math.random() * 10000);

      setTimeout(() => {
        observer.complete();
      }, 10000);
    })
  }

  getMessages(): Observable<string>{
    return new Observable(observer => {

      var time = 0;
      setTimeout(() => {
        observer.next("Hey what's up?");
      }, time += Math.random() * 2000);

      setTimeout(() => {
        observer.next("What are you doing?");
      }, time += Math.random() * 2000);

      setTimeout(() => {
        observer.next("Why are you here?");
      }, time += Math.random() * 2000);

      setTimeout(() => {
        observer.next("Hi");
      }, time += Math.random() * 2000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    })
  }

}