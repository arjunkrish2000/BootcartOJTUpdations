import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmasterLayoutComponent } from './productmaster-layout.component';

describe('ProductmasterLayoutComponent', () => {
  let component: ProductmasterLayoutComponent;
  let fixture: ComponentFixture<ProductmasterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmasterLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmasterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
