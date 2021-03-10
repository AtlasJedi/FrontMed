import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/interfaces/news';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  public newsA: News[] = [];
  
  readMore: boolean[] = [];

  clickReadMore(i: number): void{
      this.readMore[i] = !this.readMore[i]
      console.log("clicked!!!"+ i)
  }

  ngOnInit(): void {
    this.getNews();
  }

  public getNews(): void {
    this.newsService.getNews()
    .subscribe(
      (response: News[]) => { this.newsA= response},
      (error: HttpErrorResponse) => { alert(error.message);
      })
      
  }
  constructor(private newsService: NewsService) { }


}
