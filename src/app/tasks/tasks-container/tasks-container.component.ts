import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { Task } from '../tasks.types';
import { TaskMultiService } from '../task-multi.service';

@Component({
  selector: 'rva-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css']
})
export class TasksContainerComponent implements OnInit {
  public tasks$: Observable<Task[]>;
  public selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private taskMultiService: TaskMultiService,
  ) { }

  ngOnInit() {
    if (this.taskMultiService.isMulti()) {
      this.tasks$ = this.taskMultiService.getTasks();
    } else {
      this.tasks$ = this.taskService.getTasks();
    }
  }

  public select(task) {
    this.selectedTask = task;
  }

  public done(task) {
  }
}
