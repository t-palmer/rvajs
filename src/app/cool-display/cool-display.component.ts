import { Component, OnInit } from '@angular/core';
import {StringUtilService} from '../string-util.service';

@Component({
  selector: 'rva-cool-display',
  templateUrl: './cool-display.component.html',
  styleUrls: ['./cool-display.component.css']
})
export class CoolDisplayComponent implements OnInit {

  constructor(
    public stringUtilService: StringUtilService
  ) { }

  ngOnInit() {
  }

  public getSomething(): string {
    return 'something';
  }
}
