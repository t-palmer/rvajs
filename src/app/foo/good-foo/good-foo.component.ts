import { Component } from '@angular/core';
import { FooService } from '../foo.service';

@Component({
  selector: 'rva-good-foo',
  template: `
    <p>{{getFoo()}}</p>
  `,
})
export class GoodFooComponent {
  constructor(
    private fooService: FooService
  ) { }

  public getFoo(): string {
    return this.fooService.getFoo();
  }
}
