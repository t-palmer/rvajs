import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolDisplayComponent } from './cool-display.component';

describe('CoolDisplayComponent', () => {
  let component: CoolDisplayComponent;
  let fixture: ComponentFixture<CoolDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
