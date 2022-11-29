import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService, Message } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: any[] = [];

  chatForm: FormGroup = this.fb.group({
    channel: [''],
    message: [''],
    user: ['']
  });

  constructor(private chat: ChatService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.chat.getAllMessages("news").pipe().subscribe(data => {
      console.log(data);
      this.messages = data;
    });
  }

  onSubmit() {
    console.log("clicked submit", this.chatForm.value);

    let data: Message = {
      user: this.chatForm.value.user,
      id: 0,
      message: this.chatForm.value.message,
      channel: this.chatForm.value.channel
    };

    this.chat.createNewMessage(data).subscribe(response => {
      console.log("recieved response from api", response);
      this.messages = response;
    });

  }
}
