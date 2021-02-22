import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/interfaces/news';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private newsA: News[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
    private getNews(): void {
      this.newsService.getNews()
      .subscribe(
        (response: News[]) => { this.newsA= response},
        (error: HttpErrorResponse) => { alert(error.message);
        })
        
    }
  constructor(private breakpointObserver: BreakpointObserver,
    private newsService: NewsService) {}

    ngOnInit(): void {
      this.getNews();
    }
}
