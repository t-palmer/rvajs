import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagSelectComponent } from './flag-select.component';

describe('FlagSelectComponent', () => {
  let component: FlagSelectComponent;
  let fixture: ComponentFixture<FlagSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
