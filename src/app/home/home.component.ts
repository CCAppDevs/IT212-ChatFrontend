import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: any[] = [];

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
    this.chat.getAllMessages("news").pipe().subscribe(data => {
      console.log(data);
      this.messages = data;
    });
  }

}
