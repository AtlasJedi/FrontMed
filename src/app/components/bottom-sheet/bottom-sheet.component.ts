import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass']
})
export class BottomSheetComponent implements OnInit {

  zoomStatus: number = 1;

  constructor() { }

  ngOnInit(): void {
  }


  txtBigger(){
    this.zoomStatus += 0.1;
    window.parent.document.body.style.zoom = this.zoomStatus+'';
  }
  txtSmaller(){
    this.zoomStatus -= 0.1;
    window.parent.document.body.style.zoom = this.zoomStatus+'';
  }
  txtRestore(){
    this.zoomStatus = 1;
    window.parent.document.body.style.zoom = 1+'';
  }
}
