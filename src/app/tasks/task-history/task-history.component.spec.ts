import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHistoryComponent } from './task-history.component';

describe('TaskHistoryComponent', () => {
  let component: TaskHistoryComponent;
  let fixture: ComponentFixture<TaskHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
