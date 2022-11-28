import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  // update
  // delete
}
