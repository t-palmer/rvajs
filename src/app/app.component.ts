import { Component } from '@angular/core';

@Component({
  selector: 'rva-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rvajs';

  public myFlags = {
    Running: false,
    Error: false,
    Aborted: false,
    Suspended: false,
    Closed: false,
  };
}
