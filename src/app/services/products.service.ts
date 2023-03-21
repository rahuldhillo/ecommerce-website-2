import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getFeaturedProducts(): Observable<any> {
    return this.http
      .get('../assets/products.json')
      .pipe(map((res: any) => res.featuredProducts));
  }
  getNewArrivals(): Observable<any> {
    return this.http
      .get('../assets/products.json')
      .pipe(map((res: any) => res.newArrivals));
  }
}
