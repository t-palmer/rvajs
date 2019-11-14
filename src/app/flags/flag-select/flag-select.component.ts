import { Component, Input } from '@angular/core';

@Component({
  selector: 'rva-flag-select',
  templateUrl: './flag-select.component.html',
  styleUrls: ['./flag-select.component.css']
})
export class FlagSelectComponent {
  @Input() flags: any;

  public keys(obj: any) {
    return Object.keys(obj);
  }
}
