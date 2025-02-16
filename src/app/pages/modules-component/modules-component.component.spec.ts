import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesComponentComponent } from './modules-component.component';

describe('ModulesComponentComponent', () => {
  let component: ModulesComponentComponent;
  let fixture: ComponentFixture<ModulesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
