import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';import { HandiSheetComponent } from '../bottom-sheets/handi-sheet/handi-sheet.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

  openBottomSheet() {
    this.bottomSheet.open(HandiSheetComponent)
  }
  
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
    
  constructor(private breakpointObserver: BreakpointObserver, 
    private bottomSheet: MatBottomSheet ) {}
 
}
