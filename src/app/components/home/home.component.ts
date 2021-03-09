import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from 'src/app/services/news/news.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */


  public newsA: News[] = [];

  private getNews(): void {
    this.newsService.getNews()
    .subscribe(
      (response: News[]) => { this.newsA= response},
      (error: HttpErrorResponse) => { alert(error.message);
      })
      
  }
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }

  owls: any;

  constructor(private breakpointObserver: BreakpointObserver,
    private newsService: NewsService) {

      this.owls = [
        {url: 'red'},
        {url: 'assets/img/back2.jpg'}];
    }

    ngOnInit(): void {
      this.getNews();
    }
}
