import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-email-sheet',
  templateUrl: './email-sheet.component.html',
  styleUrls: ['./email-sheet.component.sass']
})
export class EmailSheetComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  
  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }




  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
