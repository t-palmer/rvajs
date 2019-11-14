import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'rva-simple',
  templateUrl: './simple.component.html',
})
export class SimpleComponent implements OnInit {
  constructor(
    private simpleService: SimpleService
  ) { }

  public someText: string;

  ngOnInit() {
    this.someText = this.simpleService.getSomething();
  }
}
