import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrival2Component } from './new-arrival2.component';

describe('NewArrival2Component', () => {
  let component: NewArrival2Component;
  let fixture: ComponentFixture<NewArrival2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrival2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrival2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
