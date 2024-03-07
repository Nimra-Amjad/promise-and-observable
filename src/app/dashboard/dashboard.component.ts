import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private mySubscription!: Subscription;
  constructor() {

  }
  // ngOnInit(): void {
  //   // promise
  //   const promise = new Promise(resolve => {
  //     console.log('Promise Working....');
  //     setTimeout(() => {
  //       resolve('Promise Working!');
  //       resolve('Promise Working!');
  //       resolve('Promise Working!');
  //       resolve('Promise Working!');
  //     }, 1000);
  //   })
  //   promise.then(result => console.log(result));

  //   // observable

  //   const observable = new Observable(sub => {
  //     console.log('Observable Working....');
  //     setTimeout(() => {
  //       sub.next('Observable Working!');
  //       sub.next('Observable Working!1');
  //       sub.next('Observable Working!');
  //       sub.next('Observable Working!');
  //     }, 1000);
  //   })
  //   observable.pipe(filter(d => d === 'Observable Working!1'))
  //     .subscribe(result => console.log(result));
  // }

  ngOnInit(): void {
    // promise
    const promise = new Promise(resolve => {
      console.log('Promise Working....');
      setTimeout(() => {
        resolve('Promise Working!');
        resolve('Promise Working!');
        resolve('Promise Working!');
        resolve('Promise Working!');
      }, 1000);
    })
    promise.then(result => console.log(result));

    // observable

    const observable = new Observable(sub => {
      console.log('Observable Working....');
      let counter = 0;
      setInterval(() => {
        counter = counter + 1;
        sub.next(counter)

      }, 1000);
    })
    this.mySubscription = observable.subscribe(result => console.log('Subscriber count ' + result));
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
