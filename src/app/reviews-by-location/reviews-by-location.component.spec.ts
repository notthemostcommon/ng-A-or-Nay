import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsByLocationComponent } from './reviews-by-location.component';

describe('ReviewsByLocationComponent', () => {
  let component: ReviewsByLocationComponent;
  let fixture: ComponentFixture<ReviewsByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
