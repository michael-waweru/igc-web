import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroilerManagementComponent } from './broiler-management.component';

describe('BroilerManagementComponent', () => {
  let component: BroilerManagementComponent;
  let fixture: ComponentFixture<BroilerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BroilerManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroilerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
