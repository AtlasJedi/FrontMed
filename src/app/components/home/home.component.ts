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

  public defaultNews: News = {
    id: 1,
    title: 'Widzisz to poniewaz serwis jest nieaktywny',
    content: [''],
    summary: '',
    category: '',
    imgURL: 'url(assets/img/f1.jpg)',
    readMoreURL: null,
    position: 1,
    isActive: true,
    date: new Date("")
}
  public newsA: News[] = [];

  public getNews(): void {
    this.newsService.getNews()
    .subscribe(
      (response: News[]) => { this.newsA= response},
      
      (error: News[]) => { this.newsA = [
        this.defaultNews
      ]
      })
    }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 900,
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
