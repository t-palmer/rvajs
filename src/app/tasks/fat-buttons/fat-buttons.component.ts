import { Component, Input } from '@angular/core';
import { Task } from '../tasks.types';
import { TaskService } from '../task.service';

enum Action {
  Done,
  Remove
}

@Component({
  selector: 'rva-fat-buttons',
  template: `
    <button (click)="handle(action.Done)">
      Done</button>
    <button (click)="handle(action.Remove)">
      Remove</button>
  `,
})
export class FatButtonsComponent {
  @Input() task: Task;
  public action = Action;

  constructor(
    private taskService: TaskService
  ) { }

  handle(action: Action) {
    if (action === Action.Done) {
      this.taskService.completeTask(this.task);
    } else if (action === Action.Remove) {
      this.taskService.removeTask(this.task);
    }
  }
}
