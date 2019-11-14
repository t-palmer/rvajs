import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadFooComponent } from './bad-foo/bad-foo.component';
import { GoodFooComponent } from './good-foo/good-foo.component';

@NgModule({
  declarations: [
    BadFooComponent,
    GoodFooComponent,
  ],
  exports: [
    BadFooComponent,
    GoodFooComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FooModule { }
