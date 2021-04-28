import { Injectable } from '@angular/core';
import { MessageHero } from 'src/app/interfaces/userMessage';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from 'src/app/interfaces/globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

url = myGlobals.url;

  newMessage(message: MessageHero): Observable<MessageHero> {
    return this.http.post<MessageHero>(this.url+'/message/new', message);
  }

  
  constructor(private http: HttpClient) { }
}
