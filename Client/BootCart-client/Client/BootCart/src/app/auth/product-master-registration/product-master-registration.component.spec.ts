import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMasterRegistrationComponent } from './product-master-registration.component';

describe('ProductMasterRegistrationComponent', () => {
  let component: ProductMasterRegistrationComponent;
  let fixture: ComponentFixture<ProductMasterRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMasterRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMasterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
