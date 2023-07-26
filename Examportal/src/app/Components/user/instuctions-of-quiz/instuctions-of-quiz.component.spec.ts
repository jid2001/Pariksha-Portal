import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstuctionsOfQuizComponent } from './instuctions-of-quiz.component';

describe('InstuctionsOfQuizComponent', () => {
  let component: InstuctionsOfQuizComponent;
  let fixture: ComponentFixture<InstuctionsOfQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstuctionsOfQuizComponent]
    });
    fixture = TestBed.createComponent(InstuctionsOfQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
