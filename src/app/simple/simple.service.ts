import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  getSomething(): string {
    return 'something';
  }
}
