import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NewsCandidate } from 'src/app/interfaces/newsCandidate';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  

  newsCandidate: NewsCandidate = {
    title: "",
    content: ["", "", ""],
    summary: ""
  }

  test: number[] = [1,2,3]

  increseP() {
    this.newsCandidate.content.push("")
  }

  getData(val: any, id: number) {
    console.log(val + "  "+  id)
    if (id == 100){
      this.newsCandidate.title = val;
      console.log("zmieniono value: "+this.newsCandidate.title)
      return
    } 
    this.newsCandidate.content[id+1] = val;
    
  }
  post() {
    this.newsCandidate.content.forEach( data => 
      console.log(data))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
