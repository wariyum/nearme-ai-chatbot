
# Chatbot Widget

This is an **Angular-based Chatbot Widget** that can be embedded in any Nearme-E-Commerce Platform, using Microfront end pattern.
The widget is built as a standalone component using **Angular Elements** so it can be reused across multiple projects.

---

##  Running Locally

Follow the steps below to build and run the chatbot locally for testing.

### 1. Build the Project
Run the following command to build the chatbot in production mode:

```bash
ng build --configuration production
````

This will generate the build output inside:

```
dist/chatbot-widget/browser/
```


### 2. Quick Local Test

To test the widget without another project:

1. Inside the `dist/chatbot-widget/browser` folder, create a file named **`test.html`** with the following content:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="UTF-8">
       <title>Chatbot Local Test</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <h1>Testing Angular Chatbot Widget</h1>

       <cb-chatbot
           bot-name="Test Bot"
           launcher-text="Chat Now"
           welcome="Hello! This is a local test.">
       </cb-chatbot>

       <script src="main.js"></script>
   </body>
   </html>
   ```

2. Serve the files locally:

   ```bash
   cd dist/chatbot-widget/browser
   npx serve .
   ```

3. Open in browser:

   ```
   http://localhost:3000/test.html
   ```

---

### 3. Embedding in Another Project

After building, include the generated JavaScript file (`main.js`) in your project HTML and use the `<cb-chatbot>` tag:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Your Website</title>
</head>
<body>
    <!-- Your website content -->
    
    <!-- Chatbot Widget -->
    <cb-chatbot 
        bot-name="Shop Assistant" 
        launcher-text="Chat" 
        welcome="Hi! How can I help you today?">
    </cb-chatbot>
    
    <!-- Include the built widget script -->
    <script src="path/to/dist/chatbot-widget/browser/main.js"></script>
</body>
</html>
```

---

## Development

### Development Server

Run the development server:

```bash
ng serve
```

Navigate to:

```
http://localhost:4200/
```

---

### Build

Build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

---

### Testing

Run unit tests:

```bash
ng test
```

---

### Watch Mode

Build in watch mode for development:

```bash
ng build --watch --configuration development
```

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── chatbot-widget.component.ts    # Main widget component
│   ├── app.ts                         # App component
│   └── app.config.ts                  # App configuration
├── main.ts                            # Angular Elements bootstrap
├── index.html                         # Development HTML
└── styles.css                         # Global styles
```

---

##  Technical Details

* **Angular Version:** 20.1.6
* **Angular Elements:** Used for custom element creation
* **Shadow DOM:** For style encapsulation
* **TypeScript:** For type-safe development


````
