import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlagCheckboxComponent } from './flag-checkbox/flag-checkbox.component';
import { FlagSelectComponent } from './flag-select/flag-select.component';
import { ImperativeFlagsComponent } from './imperative-flags/imperative-flags.component';
import { DeclarativerFlagsComponent } from './declarativer-flags/declarativer-flags.component';
import { DeclarativeFlagsComponent } from './declarative-flags/declarative-flags.component';

@NgModule({
  declarations: [
    FlagCheckboxComponent,
    FlagSelectComponent,
    ImperativeFlagsComponent,
    DeclarativerFlagsComponent,
    DeclarativeFlagsComponent,
  ],
  exports: [
    FlagCheckboxComponent,
    FlagSelectComponent,
    ImperativeFlagsComponent,
    DeclarativerFlagsComponent,
    DeclarativeFlagsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class FlagsModule { }
