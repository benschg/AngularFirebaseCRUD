import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatExperienceListComponent } from './great-experience-list.component';

describe('GreatExperienceListComponent', () => {
  let component: GreatExperienceListComponent;
  let fixture: ComponentFixture<GreatExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatExperienceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
