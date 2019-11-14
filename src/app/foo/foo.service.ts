import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  public getFoo(): string {
    return 'foo';
  }

}
