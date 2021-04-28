import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/app/interfaces/news';
import * as myGlobals from 'src/app/interfaces/globals';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsUrl = myGlobals.url;
  
  
  public getNews(): Observable<News[]> {
    console.log(this.newsUrl);
    return this.http.get<News[]>(this.newsUrl+'/news/all');
  }
  
  public getNewsLatestOne(): Observable<News> {
    console.log(this.newsUrl);
    return this.http.get<News>(this.newsUrl+'/news/latest');
  }

  constructor(private http: HttpClient) { 
  }
}
