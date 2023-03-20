import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeaturedProductsService {
  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http
      .get('../assets/featured-products.json')
      .pipe(map((res: any) => res.data));
  }
}
