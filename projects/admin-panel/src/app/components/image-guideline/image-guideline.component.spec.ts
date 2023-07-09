import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGuidelineComponent } from './image-guideline.component';

describe('ImageGuidelineComponent', () => {
  let component: ImageGuidelineComponent;
  let fixture: ComponentFixture<ImageGuidelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGuidelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
