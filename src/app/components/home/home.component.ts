import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from 'src/app/services/news/news.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { News } from 'src/app/interfaces/news';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */


  public newsA: News[] = [];

  public getNews(): void {
    this.newsService.getNews()
    .subscribe(
      (response: News[]) => { this.newsA= response},
      
      (error: HttpErrorResponse) => { alert(error.message);
      })
    }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1200,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['next','prev'],
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
    nav: false
  }
  



  constructor(private newsService: NewsService) {

      
    }

    ngOnInit(): void {
      this.getNews();
    }
}
