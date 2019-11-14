import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../tasks.types';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'rva-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public task$: Observable<Task>;
  private myTask: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.task$ = this.taskService
      .getTask(id)
      .pipe(
        tap((task: Task) => this.myTask = task)
      );
  }

  public done() {
    this.taskService.completeTask(this.myTask);
  }
}
