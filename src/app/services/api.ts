import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = 'https://api-navigator-v2.mypeacock.in';

  // constructor(private http: HttpClient) {}

  // sendImage(base64Image: string): Observable<any> {
  //   const payload = { imageBase64: base64Image };

  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'war-pgm': '4-1-NER-1',
  //     Authorization:
  //       'Bearer eyJraWQiOiJLcjN2aFBkUVg1WmNnczcxXC9RTzhyRVpvSGZEME9BelgzNmRNaEpiN3lXYz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWVB2NzI0eGo0WlNnV1RfVEdFaW1ldyIsIm5lYXJtZS1yb2xlIjoid2FyaXl1bV9zdXBlcl9hZG1pbiIsInN1YiI6IjBjYzE2NThlLTNhNWItNGMwZS04MTEyLTFkMTc1YjFiMTU3MiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9QV21JeW11YTEiLCJjb2duaXRvOnVzZXJuYW1lIjoiMGNjMTY1OGUtM2E1Yi00YzBlLTgxMTItMWQxNzViMWIxNTcyIiwiYXVkIjoiODJ1aWhrNTI0YnNkMjJtcmQ5YjcwZWY1cyIsImV2ZW50X2lkIjoiOWZkNWU2MGQtYzRiMi00MDhmLWEwMzktMDNkYjRkODNmMDA0IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NTUxNjUzMjEsIm5hbWUiOiJEMkQiLCJleHAiOjE3NTYwMjIyMDUsImlhdCI6MTc1NTkzNTgwNywiZW1haWwiOiJ3YXJpeXVtQGdtYWlsLmNvbSJ9.e68GW0QEwue4QEGnPLJ91mxgWZGtnCnc9V_4GXUnHB9RqJmJHZjUwHBNLzohJMvJ8_vmqDaG2MFsmDN6Lw-dZSsRaJDZhR9yCALW7YFnzms7LgECKN7C7m401GQlfe_qSlS8F6I8zNhCmFrI_KSN-Pr0FhNUV9nL1EwWiV_DznEZPpr9ZaGfkh-iAUmMiRkpBu8BKf32yHYXCOAP6okOJPk9OubmVQMY-dJKGDJDa7Ihm5HK_C9Kut714p-u3UaKlK8-myaz6J4glaRVEliDvFajNIKBZOSZU-wOXplUIbsVoD1u3lrOkvObVjveMTllcc4ASAezz4836Lm5IcvNdA',
  //   };

  //   return this.http.post(`${this.apiUrl}/products/image-to-text`, payload, { headers });
  // }

  private apiUrl = 'https://api-navigator-v2.mypeacock.in';
  constructor(private http: HttpClient) {}
  sendImage(base64Image: string): Observable<any> {
    // dummy response for testing
    const dummyResponse = {
      product_name: 'Slides',
      brand: 'HRX',
      model_number: 'Not visible',
      specifications: {
        size: 'Not visible',
        weight: 'Not visible',
        color: 'White',
        material: 'Not visible',
        dimensions: 'Not visible',
      },
      nutritional_information: 'Not applicable',
      ingredients: 'Not applicable',
      manufacturing_location: 'Not visible',
      serial_number: 'Not visible',
      barcode: 'Not visible',
      other_descriptive_text: 'Stylish white slides with HRX branding.',
    };

    return of(dummyResponse).pipe(delay(500)); // 500ms delay
  }
}
