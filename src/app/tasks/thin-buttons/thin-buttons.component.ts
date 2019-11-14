import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../tasks.types';

@Component({
  selector: 'rva-thin-buttons',
  template: `
    <button (click)="done()">
      Done</button>
    <button (click)="remove()">
      Remove</button>
  `,
})
export class ThinButtonsComponent {
  @Input() task: Task;

  constructor(
    private taskService: TaskService
  ) { }

  done() {
    this.taskService.completeTask(this.task);
  }

  remove() {
    this.taskService.removeTask(this.task);
  }
}
