import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLawFirmComponent } from './add-law-firm.component';

describe('AddLawFirmComponent', () => {
  let component: AddLawFirmComponent;
  let fixture: ComponentFixture<AddLawFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLawFirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLawFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
