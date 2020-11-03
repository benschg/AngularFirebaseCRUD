import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatExperiencesComponent } from './great-experiences.component';

describe('GreatExperiencesComponent', () => {
  let component: GreatExperiencesComponent;
  let fixture: ComponentFixture<GreatExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
