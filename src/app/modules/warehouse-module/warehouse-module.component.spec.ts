import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseModuleComponent } from './warehouse-module.component';

describe('WarehouseModuleComponent', () => {
  let component: WarehouseModuleComponent;
  let fixture: ComponentFixture<WarehouseModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehouseModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
