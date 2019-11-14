import { Component, Input } from '@angular/core';

@Component({
  selector: 'rva-declarative-flags',
  template: `
    <div class="btn-group-toggle">
      <rva-flag-checkbox
        *ngFor="let state of keys(flags)"
        [(flag)]="flags[state]"
        [label]="state"
      >
      </rva-flag-checkbox>
    </div>
  `,
})
export class DeclarativeFlagsComponent {
  @Input() flags: any;

  public keys(obj: any) {
    return Object.keys(obj);
  }
}
