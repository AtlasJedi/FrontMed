import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/app/interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { 
  }

  public getNews(): Observable<News[]> {
    console.log(this.newsUrl);
    return this.http.get<News[]>(this.newsUrl+'/news/all');
  }
}
