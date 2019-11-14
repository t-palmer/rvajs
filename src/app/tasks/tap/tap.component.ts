import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable} from 'rxjs';
import { Task} from '../tasks.types';
import { TaskService} from '../task.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'rva-tap',
  template: `
      <div *ngIf="task$ | async as task">
          <rva-task-detail [task]="task">
          </rva-task-detail>
      </div>
  `,
})
export class TapComponent implements OnInit {
  public task$: Observable<Task>;
  private myTask: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.task$ = this.taskService.getTask(id).pipe(
      tap((task: Task) => this.myTask = task)
    );
  }
}
