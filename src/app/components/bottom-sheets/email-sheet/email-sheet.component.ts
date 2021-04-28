import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-email-sheet',
  templateUrl: './email-sheet.component.html',
  styleUrls: ['./email-sheet.component.sass']
})
export class EmailSheetComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.maxLength(1000)])

  
  submit(): void {
    console.log("message validation: " + this.message.valid)
    console.log("submit done")
    console.log(this.email.valid);
    this._bottomSheetRef.dismiss();
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
    private _bottomSheetRef: MatBottomSheetRef<EmailSheetComponent>) { }

  ngOnInit(): void {
  }

}
