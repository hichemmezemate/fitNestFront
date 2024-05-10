import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceDashboardComponent } from './exercice-dashboard.component';

describe('ExerciceDashboardComponent', () => {
  let component: ExerciceDashboardComponent;
  let fixture: ComponentFixture<ExerciceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciceDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
