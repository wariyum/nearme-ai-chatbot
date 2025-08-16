import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Bubble = { from: 'bot' | 'you'; text: string; at: Date };

@Component({
  selector: 'cb-chatbot', //  for Angular; the actual custom-element name is registered in main.ts
  standalone: true,
  imports: [CommonModule, FormsModule],
  encapsulation: ViewEncapsulation.ShadowDom, // isolate styles from the host page
  styles: [
    `
      :host {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 2147483647;
        font-family: system-ui, Arial, sans-serif;
      }
      .btn {
        all: unset;
        cursor: pointer;
        padding: 10px 14px;
        border-radius: 999px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        background: #111;
        color: #fff;
      }
      .panel {
        width: 370px;
        height: 470px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
        background: #fff;
        display: flex;
        flex-direction: column;
      }
      .hdr {
        background: #111;
        color: #fff;
        padding: 12px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .body {
        padding: 12px;
        gap: 8px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 100%;
      }
      .bubble {
        max-width: 80%;
        padding: 8px 10px;
        border-radius: 14px;
        line-height: 1.35;
        word-wrap: break-word;
      }
      .you {
        align-self: flex-end;
        background: #eef;
      }
      .bot {
        align-self: flex-start;
        background: #f2f2f2;
      }
      .ftr {
        padding: 10px;
        border-top: 1px solid #eee;
        display: flex;
        gap: 8px;
      }
      .input {
        flex: 1;
        padding: 8px 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        outline: none;
      }
      .x {
        all: unset;
        cursor: pointer;
        opacity: 0.85;
      }
    `,
  ],
  template: `
    <ng-container *ngIf="open; else launcher">
      <div class="panel">
        <div class="hdr">
          <strong>{{ botName }}</strong>
          <button class="x" (click)="open = false" title="Close">✕</button>
        </div>

        <div class="body">
          <div
            *ngFor="let b of messages"
            class="bubble"
            [class.you]="b.from === 'you'"
            [class.bot]="b.from === 'bot'"
          >
            {{ b.text }}
          </div>
        </div>

        <form class="ftr" (submit)="send($event)">
          <input class="input" [(ngModel)]="draft" name="draft" placeholder="Type a message..." />
          <button class="btn" type="submit">Send</button>
        </form>
      </div>
    </ng-container>

    <ng-template #launcher>
      <button class="btn" (click)="open = true">{{ launcherText }}</button>
    </ng-template>
  `,
})
export class ChatbotWidgetComponent {
  /** Public inputs map to HTML attributes: <cb-chatbot bot-name="..."> */
  @Input({ alias: 'bot-name' }) botName = 'Shop Assistant';
  @Input({ alias: 'launcher-text' }) launcherText = 'Chat';
  @Input({ alias: 'welcome' }) welcome = 'Hi! How can I help you today?';

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
    // Demo bot: echo a reply
    setTimeout(() => {
      this.messages.push({ from: 'bot', text: `You said: "${text}"`, at: new Date() });
    }, 300);
  }
}
