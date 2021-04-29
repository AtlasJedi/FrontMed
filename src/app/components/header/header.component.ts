import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactSheetComponent } from '../bottom-sheets/contact-sheet/contact-sheet.component';
import { EmailSheetComponent } from '../bottom-sheets/email-sheet/email-sheet.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: '<simple-notifications></simple-notifications>',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  openContactSheet() {
    this.bottomSheet.open(ContactSheetComponent)
  }

  openEmailSheet() {
    this.bottomSheet.open(EmailSheetComponent)
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private bottomSheet: MatBottomSheet) {
               }

  ngOnInit(): void {
    
  }


}
