import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http
      .get('../assets/features.json')
      .pipe(map((res: any) => res.data));
  }
}
