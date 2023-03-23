import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  getBanners(): Observable<any> {
    return this.http
      .get('../assets/banners.json')
      .pipe(map((res: any) => res.data));
  }
}
