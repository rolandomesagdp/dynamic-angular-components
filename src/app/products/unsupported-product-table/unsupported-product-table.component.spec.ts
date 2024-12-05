import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportedProductTableComponent } from './unsupported-product-table.component';

describe('UnsupportedProductTableComponent', () => {
  let component: UnsupportedProductTableComponent;
  let fixture: ComponentFixture<UnsupportedProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsupportedProductTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsupportedProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
