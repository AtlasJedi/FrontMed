import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contact-sheet',
  templateUrl: './contact-sheet.component.html',
  styleUrls: ['./contact-sheet.component.sass']
})
export class ContactSheetComponent implements OnInit {

  call(){
    this._bottomSheetRef.dismiss();
  }
  constructor(private _bottomSheetRef: MatBottomSheetRef<ContactSheetComponent>) { }

  ngOnInit(): void {
  }

}
