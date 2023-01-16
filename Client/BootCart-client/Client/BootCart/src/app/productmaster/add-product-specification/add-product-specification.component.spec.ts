import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSpecificationComponent } from './add-product-specification.component';

describe('AddProductSpecificationComponent', () => {
  let component: AddProductSpecificationComponent;
  let fixture: ComponentFixture<AddProductSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductSpecificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
