import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ads1Component } from './ads1.component';

describe('Ads1Component', () => {
  let component: Ads1Component;
  let fixture: ComponentFixture<Ads1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ads1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ads1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
