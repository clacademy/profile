import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MenuItem } from '../prime-modules/prime';
import { EmitType } from '..';

@Injectable({
  providedIn: 'root'
})

/**
 * Data Transfering between child to parent component
 */
export class EmitService {
  private breadCrumbChange = new Subject<any>();
  breadCrumbData$ = this.breadCrumbChange.asObservable();
  private dialogSubject = new Subject<any>();
  constructor() { }
  /**
   * Transfer breadcrumb data from child component to parent component.
   */
  breadCrumbChangeEvent(res?: MenuItem[]): any {
   this.breadCrumbChange.next(res);
  }
  // set observable new value
  sendChangeEvent(response?: EmitType) {
    this.dialogSubject.next(response);
  }
  // Return observable type
  getChangeEvent(): Observable<EmitType> {
    return this.dialogSubject.asObservable();
  }
}
