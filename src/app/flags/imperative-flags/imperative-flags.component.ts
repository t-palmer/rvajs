import { Component, Input } from '@angular/core';

@Component({
  selector: 'rva-imperative-flags',
  template: `
    <div class="btn-group-toggle">
      <rva-flag-checkbox
        *ngFor="let state of Object.keys(flags)"
        [(flag)]="flags[state]"
        [label]="state"
      >
      </rva-flag-checkbox>
    </div>
  `,
})
export class ImperativeFlagsComponent {
  @Input() flags: any;

  public Object = Object;
}
