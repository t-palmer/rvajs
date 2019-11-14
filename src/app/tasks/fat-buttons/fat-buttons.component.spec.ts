import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatButtonsComponent } from './fat-buttons.component';

describe('FatButtonsComponent', () => {
  let component: FatButtonsComponent;
  let fixture: ComponentFixture<FatButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
