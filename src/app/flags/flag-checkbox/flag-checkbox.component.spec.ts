import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCheckboxComponent } from './flag-checkbox.component';

describe('FlagCheckboxComponent', () => {
  let component: FlagCheckboxComponent;
  let fixture: ComponentFixture<FlagCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
