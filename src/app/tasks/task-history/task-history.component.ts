import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rva-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {
  @Input() task: any;

  ngOnInit() {
  }
}
