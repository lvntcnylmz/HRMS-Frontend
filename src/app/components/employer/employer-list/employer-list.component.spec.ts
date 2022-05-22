import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListComponent } from './employer-list.component';
import { EmployerComponent } from 'src/app/components/employer/employer.component';

describe('EmployerListComponent', () => {
  let component: EmployerListComponent;
  let fixture: ComponentFixture<EmployerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerListComponent, EmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
