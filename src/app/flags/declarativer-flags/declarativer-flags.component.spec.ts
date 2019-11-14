import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarativerFlagsComponent } from './declarativer-flags.component';

describe('DeclarativerFlagsComponent', () => {
  let component: DeclarativerFlagsComponent;
  let fixture: ComponentFixture<DeclarativerFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarativerFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarativerFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
