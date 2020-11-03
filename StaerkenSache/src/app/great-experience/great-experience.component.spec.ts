import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatExperienceComponent } from './great-experience.component';

describe('GreatExperienceComponent', () => {
  let component: GreatExperienceComponent;
  let fixture: ComponentFixture<GreatExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
