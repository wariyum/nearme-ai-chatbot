import 'zone.js';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
// import { ChatbotWidgetComponent } from './app/chatbot-widget.component';
import { ChatbotWidgetComponent } from './app/chatbot/chatbot-widget.component';
import { provideHttpClient } from '@angular/common/http';

(async () => {
  const app = await createApplication({
    providers: [provideHttpClient()],
  });

  const el = createCustomElement(ChatbotWidgetComponent, { injector: app.injector });
  customElements.define('cb-chatbot', el);
})();
