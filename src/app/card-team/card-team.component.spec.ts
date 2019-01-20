import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeamComponent } from './card-team.component';

describe('CardTeamComponent', () => {
  let component: CardTeamComponent;
  let fixture: ComponentFixture<CardTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
