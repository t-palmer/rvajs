import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarativeFlagsComponent } from './declarative-flags.component';

describe('DeclarativeFlagsComponent', () => {
  let component: DeclarativeFlagsComponent;
  let fixture: ComponentFixture<DeclarativeFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarativeFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarativeFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
