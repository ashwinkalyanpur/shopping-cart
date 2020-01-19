import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartDataService {

  private Count = new BehaviorSubject<number>(0);
  cast = this.Count.asObservable();
  currentCount: number = 0;

  constructor() { }

  editCount(newCount: number){
    this.currentCount += newCount; 
    this.Count.next(this.currentCount);
  }

}