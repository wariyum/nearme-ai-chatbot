import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

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
