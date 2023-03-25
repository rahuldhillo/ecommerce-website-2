import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationServiceConfig {
  constructor() {}

  public locale_id: string = '';
}
