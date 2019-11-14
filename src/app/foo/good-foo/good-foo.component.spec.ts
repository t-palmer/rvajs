import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodFooComponent } from './good-foo.component';

describe('GoodFooComponent', () => {
  let component: GoodFooComponent;
  let fixture: ComponentFixture<GoodFooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodFooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
