import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskHistoryComponent } from './task-history/task-history.component';
import { ThinButtonsComponent } from './thin-buttons/thin-buttons.component';
import { FatButtonsComponent } from './fat-buttons/fat-buttons.component';
import { TapComponent } from './tap/tap.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    TasksContainerComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskHistoryComponent,
    ThinButtonsComponent,
    FatButtonsComponent,
    TapComponent,
    TaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
