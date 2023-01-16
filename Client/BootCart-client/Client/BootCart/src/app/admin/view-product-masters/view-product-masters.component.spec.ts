import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductMastersComponent } from './view-product-masters.component';

describe('ViewProductMastersComponent', () => {
  let component: ViewProductMastersComponent;
  let fixture: ComponentFixture<ViewProductMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductMastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
