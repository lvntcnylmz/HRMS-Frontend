import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementDetailComponent } from './job-advertisement-detail.component';

describe('JobAdvertisementDetailComponent', () => {
  let component: JobAdvertisementDetailComponent;
  let fixture: ComponentFixture<JobAdvertisementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
