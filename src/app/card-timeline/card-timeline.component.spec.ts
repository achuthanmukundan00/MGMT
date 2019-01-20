import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimelineComponent } from './card-timeline.component';

describe('CardTimelineComponent', () => {
  let component: CardTimelineComponent;
  let fixture: ComponentFixture<CardTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
