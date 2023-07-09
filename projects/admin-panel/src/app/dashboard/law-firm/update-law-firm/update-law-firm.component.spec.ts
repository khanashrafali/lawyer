import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLawFirmComponent } from './update-law-firm.component';

describe('UpdateLawFirmComponent', () => {
  let component: UpdateLawFirmComponent;
  let fixture: ComponentFixture<UpdateLawFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLawFirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLawFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
