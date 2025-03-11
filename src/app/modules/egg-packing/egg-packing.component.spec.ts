import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggPackingComponent } from './egg-packing.component';

describe('EggPackingComponent', () => {
  let component: EggPackingComponent;
  let fixture: ComponentFixture<EggPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EggPackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EggPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
