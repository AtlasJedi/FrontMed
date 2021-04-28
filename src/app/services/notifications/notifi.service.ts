import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NotifiService {

private messageAlert = new Subject<string>();

currentAlert = this.messageAlert.asObservable();

sendAlert(message: string) {
    this.messageAlert.next(message);
    console.log("notify recieved message");
}

  constructor() { }

   
}
