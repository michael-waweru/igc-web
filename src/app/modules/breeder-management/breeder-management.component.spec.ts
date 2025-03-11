import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreederManagementComponent } from './breeder-management.component';

describe('BreederManagementComponent', () => {
  let component: BreederManagementComponent;
  let fixture: ComponentFixture<BreederManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreederManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreederManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
