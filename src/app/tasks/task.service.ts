import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './tasks.types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private http: HttpClient
  ) { }

  public getTasks():
    Observable<Task[]> {
    return this.http.get<Task[]>('');
  }

  public completeTask(task: Task) {
  }

  public removeTask(task: Task) {
  }

  public getTask(id: string):
    Observable<Task> {
    return this.http.get<Task>(`/task/${id}`);
  }
}
