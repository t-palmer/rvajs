import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinButtonsComponent } from './thin-buttons.component';

describe('ThinButtonsComponent', () => {
  let component: ThinButtonsComponent;
  let fixture: ComponentFixture<ThinButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
