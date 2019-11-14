import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadFooComponent } from './bad-foo.component';

describe('BadFooComponent', () => {
  let component: BadFooComponent;
  let fixture: ComponentFixture<BadFooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadFooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
