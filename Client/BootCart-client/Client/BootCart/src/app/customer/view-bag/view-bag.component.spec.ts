import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBagComponent } from './view-bag.component';

describe('ViewBagComponent', () => {
  let component: ViewBagComponent;
  let fixture: ComponentFixture<ViewBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
