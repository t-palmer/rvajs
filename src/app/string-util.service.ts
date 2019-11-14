import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringUtilService {

  constructor() { }

  public getCoolString(): string {
    return 'cool';
  }
}
