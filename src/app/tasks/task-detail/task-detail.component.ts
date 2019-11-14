import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks.types';

@Component({
  selector: 'rva-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  @Input() task: Task;
  @Output() done = new EventEmitter<Task>();
}
