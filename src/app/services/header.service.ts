import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http
      .get('../assets/header.json')
      .pipe(map((res: any) => res.data));
  }
}
