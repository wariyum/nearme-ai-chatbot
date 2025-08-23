import { Component, ElementRef, inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';

type Bubble = { from: 'bot' | 'you'; text?: string; image?: string; at: Date };

@Component({
  selector: 'cb-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './chatbot-widget.component.html',
  styleUrl: './chatbot-widget.component.css',
})
export class ChatbotWidgetComponent {
  @Input({ alias: 'bot-name' }) botName = 'Shop Assistant';
  @Input({ alias: 'launcher-text' }) launcherText = 'Chat';
  @Input({ alias: 'welcome' }) welcome = 'Hi! How can I help you today?';
  @ViewChild('chatBody') private chatBody!: ElementRef;

  private apiService = inject(ApiService);

  open = false;
  draft = '';
  messages: Bubble[] = [];

  ngOnInit() {
    this.messages.push({ from: 'bot', text: this.welcome, at: new Date() });
  }

  send(ev: Event) {
    ev.preventDefault();
    const text = this.draft.trim();
    if (!text) return;
    this.messages.push({ from: 'you', text, at: new Date() });
    this.draft = '';
    this.scrollToBottom();
    setTimeout(() => {
      this.messages.push({ from: 'bot', text: `You said: "${text}"`, at: new Date() });
      this.scrollToBottom();
    }, 300);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      console.log('Selected file:', file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;

        this.messages.push({
          from: 'you',
          image: base64,
          at: new Date(),
        });
        // send to API
        this.apiService.sendImage(base64);

        // this.apiService.sendImage(base64).subscribe({
        //   next: (response) => {
        //     console.log(response);
        //     this.messages.push({
        //       from: 'bot',
        //       image: response.image, //image:
        //       at: new Date(),
        //     });
        //     this.scrollToBottom();
        //   },
        //   error: (error) => {
        //     console.error('API Error:', error);
        //   },
        // });

        this.scrollToBottom();
      };
      reader.readAsDataURL(file);
    }
  }

  openChat() {
    this.open = true;
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.chatBody) {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      }
    }, 0);
  }
}
