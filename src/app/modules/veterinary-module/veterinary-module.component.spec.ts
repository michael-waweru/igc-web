import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryModuleComponent } from './veterinary-module.component';

describe('VeterinaryModuleComponent', () => {
  let component: VeterinaryModuleComponent;
  let fixture: ComponentFixture<VeterinaryModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinaryModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinaryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
