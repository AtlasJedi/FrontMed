import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { HttpErrorResponse } from '@angular/common/http';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news/news.service';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  public news: News[] = [];

  
  
  step: number = -1;
  
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  
  
  allExpanded = false;

  allExpandedSwitch(){
    this.step = -1;
    this.allExpanded = !this.allExpanded;
  }
  
  getDateFormated(a: Date){
  
    this.news
    
  }

  public getNews(): void {
    this.newsService.getNews()
    .subscribe(
      (response: News[]) => { this.news= response},
      
      (error: HttpErrorResponse) => { alert(error.message);
      })
      
  }
  constructor(private newsService: NewsService) {
   }

   ngOnInit(): void {
    this.getNews();

   
  }

}
