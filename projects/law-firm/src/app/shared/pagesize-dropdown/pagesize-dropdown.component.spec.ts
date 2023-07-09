import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesizeDropdownComponent } from './pagesize-dropdown.component';

describe('PagesizeDropdownComponent', () => {
  let component: PagesizeDropdownComponent;
  let fixture: ComponentFixture<PagesizeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesizeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesizeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
