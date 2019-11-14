import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativeFlagsComponent } from './imperative-flags.component';

describe('ImperativeFlagsComponent', () => {
  let component: ImperativeFlagsComponent;
  let fixture: ComponentFixture<ImperativeFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperativeFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperativeFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
