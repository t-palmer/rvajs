import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rva-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: any[];
  @Output() taskClick = new EventEmitter<any>();
}
