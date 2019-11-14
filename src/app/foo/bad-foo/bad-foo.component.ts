import { Component } from '@angular/core';
import { FooService } from '../foo.service';

@Component({
  selector: 'rva-bad-foo',
  template: `
    <p>{{fooService.getFoo()}}</p>
  `,
})
export class BadFooComponent {
  constructor(
    public fooService: FooService
  ) { }
}
