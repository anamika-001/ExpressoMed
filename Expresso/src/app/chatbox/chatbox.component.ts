import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Epic Chat';
  message = '';
  chats = [
    'Lorem ipsum dolor sit',
    'amet consectetur',
    'adipisicing elit. Qui voluptate',
    'culpa nemo doloribus',
    'numquam autem',
    'atque sapiente aliquam',
    'in quas tenetur',
    'hic perspiciatis',
    'omnis magni vitae itaque harum',
    'nulla nisi?'];
    addChat() {
      if (this.message.length === 0) {
        return;
      }
      this.chats.push(this.message);
      this.message = '';
      window.setInterval(() => {
        const elem = document.getElementById('scrolldiv')
        elem.scrollTop = elem.scrollHeight;
      }, 500);
    }
}
