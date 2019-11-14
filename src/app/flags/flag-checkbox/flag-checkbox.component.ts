import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rva-flag-checkbox',
  templateUrl: './flag-checkbox.component.html',
  styleUrls: ['./flag-checkbox.component.css']
})
export class FlagCheckboxComponent {
  @Input() label: string;
  @Input() flag: boolean;
  @Output() flagChange = new EventEmitter<boolean>();

  public changed(value: boolean) {
    this.flag = value;
    this.flagChange.emit(this.flag);
  }
}
