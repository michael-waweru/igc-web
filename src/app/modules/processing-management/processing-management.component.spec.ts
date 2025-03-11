import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingManagementComponent } from './processing-management.component';

describe('ProcessingManagementComponent', () => {
  let component: ProcessingManagementComponent;
  let fixture: ComponentFixture<ProcessingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessingManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
