import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { Task } from '../tasks.types';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'rva-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.css']
})
export class TasksContainerComponent implements OnInit {
  public tasks$: Observable<Task[]>;
  public selectedTask: Task;

  private taskList: any[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.fetchTaskList();
  }

  private fetchTaskList() {
    this.tasks$ = this.taskService.getTasks().pipe(
      tap((taskList: Task[]) => this.taskList = taskList)
    );
  }

  public select(task) {
    this.selectedTask = task;
  }

  public done(task) {
  }
}
