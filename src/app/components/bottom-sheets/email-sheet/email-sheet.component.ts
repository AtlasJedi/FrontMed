import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, timeout } from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MessageHero } from 'src/app/interfaces/userMessage';
import { MessagesService } from 'src/app/services/messages/messages.service';
import {NotificationsService} from 'angular2-notifications';


@Component({
  selector: 'app-email-sheet',
  templateUrl: './email-sheet.component.html',
  styleUrls: ['./email-sheet.component.sass']
})
export class EmailSheetComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email])
  text = new FormControl('', [Validators.maxLength(1000)])
  name = new FormControl('', [Validators.minLength(2), Validators.maxLength(50)])
  
  messageHero: MessageHero | undefined;
  
  submit(): void {
    console.log("message validation: " + this.text.valid)
    console.log("name validation: " + this.name.valid)
    console.log("email validation: " +this.email.valid);

    if (this.email.valid && this.name.valid && this.text.valid){
      this.messageHero = {
        id :0,
        name: this.name.value,
        text: this.text.value,
        email: this.email.value,
        status: 'CREATED'
      }
      this.messageService.newMessage(this.messageHero).subscribe(
        data => this.notificationService.success("Dziękujemy "+data.name+" za przesłanie wiadomości."),
        error => this.notificationService.warn("yo"+error)
      );
      
      this._bottomSheetRef.dismiss();
      
    } else {
      window.alert("Nieprawidłowe dane")
    }

  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private _bottomSheetRef: MatBottomSheetRef<EmailSheetComponent>,
              private messageService: MessagesService,
              private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

}
