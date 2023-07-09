import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoleAccessComponent } from './update-role-access.component';

describe('UpdateRoleAccessComponent', () => {
  let component: UpdateRoleAccessComponent;
  let fixture: ComponentFixture<UpdateRoleAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRoleAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRoleAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
