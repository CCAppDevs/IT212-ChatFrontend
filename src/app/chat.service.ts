import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message {
  user: string,
  message: string,
  id: number,
  channel: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl: string = "/api";

  constructor(private http: HttpClient) {
    console.log("Chat service constructed");
  }

  // crud

  // read all
  getAllMessages(channel: string): Observable<any[]> {
    // url: GET /api/:channel
    return this.http.get<any[]>(this.baseUrl + "/" + channel);
  }

  // read one
  getMessageById(channel: string, id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
  
  // create
  createNewMessage(message: Message): Observable<any> {
    // PUT /api/:channel
    return this.http.put<any>(this.baseUrl + "/" + message.channel, message);
  }

  // update
  // delete
}
