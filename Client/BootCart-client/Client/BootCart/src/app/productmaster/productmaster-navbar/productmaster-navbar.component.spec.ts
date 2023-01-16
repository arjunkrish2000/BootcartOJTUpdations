import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmasterNavbarComponent } from './productmaster-navbar.component';

describe('ProductmasterNavbarComponent', () => {
  let component: ProductmasterNavbarComponent;
  let fixture: ComponentFixture<ProductmasterNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmasterNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmasterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
