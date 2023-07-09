import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilterListingComponent } from './products-filter-listing.component';

describe('ProductsFilterListingComponent', () => {
  let component: ProductsFilterListingComponent;
  let fixture: ComponentFixture<ProductsFilterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFilterListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFilterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
