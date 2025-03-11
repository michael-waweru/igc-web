import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatcheryModuleComponent } from './hatchery-module.component';

describe('HatcheryModuleComponent', () => {
  let component: HatcheryModuleComponent;
  let fixture: ComponentFixture<HatcheryModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HatcheryModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatcheryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
