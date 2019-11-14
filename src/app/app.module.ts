import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoolDisplayComponent } from './cool-display/cool-display.component';
import { FlagsModule } from './flags/flags.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooModule} from './foo/foo.module';

@NgModule({
  declarations: [
    AppComponent,
    CoolDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlagsModule,
    FooModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
