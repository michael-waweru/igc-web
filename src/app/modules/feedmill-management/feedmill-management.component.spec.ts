import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedmillManagementComponent } from './feedmill-management.component';

describe('FeedmillManagementComponent', () => {
  let component: FeedmillManagementComponent;
  let fixture: ComponentFixture<FeedmillManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedmillManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedmillManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
