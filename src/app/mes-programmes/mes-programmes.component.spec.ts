import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProgrammesComponent } from './mes-programmes.component';

describe('MesProgrammesComponent', () => {
  let component: MesProgrammesComponent;
  let fixture: ComponentFixture<MesProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesProgrammesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
