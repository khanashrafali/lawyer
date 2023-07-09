import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleAccessComponent } from './add-role-access.component';

describe('AddRoleAccessComponent', () => {
  let component: AddRoleAccessComponent;
  let fixture: ComponentFixture<AddRoleAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoleAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
