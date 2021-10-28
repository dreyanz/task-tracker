import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private btnObj = {
    showAddTask : false,
    btnLabelText : ""
  }
  private subject = new Subject<any>();

  private taskDetailsSubject = new Subject<any>();
  private taskDetailsDestroyedSubject = new Subject<void>();
  private taskComponentInitialized = new Subject<void>();

  constructor() { }

  userIsInTaskDetails(){
    this.taskDetailsSubject.next(true);
  }

  onUserInTaskDetails(){
    return this.taskDetailsSubject.asObservable();
  }

  taskDetailsDestroyed(){
    this.taskDetailsDestroyedSubject.next();
  }

  onTaskDetaislDestroyed(){
    return this.taskDetailsDestroyedSubject.asObservable();
  }

  taskViewInitialized() {
    this.taskComponentInitialized.next();
  }

  onTaskViewInitialized() {
    return this.taskComponentInitialized.asObservable();
  }

  toggleHeaderBtn(value : string) : void {
    this.showAddTask = !this.showAddTask;
    this.btnObj.showAddTask = this.showAddTask;
    this.btnObj.btnLabelText = value;
    this.subject.next(this.btnObj);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
