import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rva-declarativer-flags',
  template: `
    <div class="btn-group-toggle">
      <rva-flag-checkbox
        *ngFor="let state of states()"
        [(flag)]="flags[state]"
        [label]="state"
      >
      </rva-flag-checkbox>
    </div>
  `,
})
export class DeclarativerFlagsComponent {
  @Input() flags: any;

  public states() {
    return Object.keys(this.flags);
  }
}
