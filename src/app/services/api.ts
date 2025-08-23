import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = 'https://your-api-endpoint.com/api';

  // constructor(private http: HttpClient) {}

  // sendImage(base64Image: string) {
  //   const payload = { image: base64Image };

  //   this.http.post(`${this.apiUrl}/upload`, payload).subscribe({
  //     next: (response) => {
  //       console.log('API Response:', response);
  //     },
  //     error: (error) => {
  //       console.error('API Error:', error);
  //     }
  //   });
  // }


  // private apiUrl = 'https://your-api-endpoint.com/api';

  // constructor(private http: HttpClient) {}

  // sendImage(base64Image: string): Observable<any> {
  //   const payload = { image: base64Image };
  //   return this.http.post(`${this.apiUrl}/upload`, payload);
  // }



  sendImage(base64Image: string) {
    console.log('Base64 Image:', base64Image);
  }
}
