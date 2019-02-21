import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeadlinesComponent } from './card-deadlines.component';

describe('CardDeadlinesComponent', () => {
  let component: CardDeadlinesComponent;
  let fixture: ComponentFixture<CardDeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
