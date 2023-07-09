import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemV1Component } from './product-item-v1.component';

describe('ProductItemV1Component', () => {
  let component: ProductItemV1Component;
  let fixture: ComponentFixture<ProductItemV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
